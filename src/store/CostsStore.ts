import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { Category, Cost } from '../core/types/costs';
import { categoriesStore } from './CategoriesStore';

export interface ICostsStore {
  costs: Cost[];

  cost?: Cost;

  filteredCosts: Cost[];

  setCost(cost: Cost): void;

  filterCost(text: string): void;
}

export class CostsStore implements ICostsStore {
  categoriesStore = categoriesStore;

  costs: Cost[] = [];

  cost?: Cost;

  filteredCosts: Cost[] = [];

  searchFilter = '';

  dateFilter: Date | null = null;

  categoriesFilter?: Category;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCost(costId: string) {
    this.cost = this.costs.find(({ id}) => id === costId);
  }

  setCost(cost: Cost) {
    this.cost = cost;
  }

  createCost(cost: Cost): Cost {
    cost.id = uuidv4();

    this.costs.push(cost);

    return cost;
  }

  updateCost(cost: Cost): Cost {
    const index = this.costs.findIndex(({ id}) => id === cost.id);

    if (index > -1) {
      this.costs[index] = cost;
    }

    return cost;
  }

  deleteCost(costId: string): void {
    const index = this.costs.findIndex(({ id}) => id === costId);

    if (index > -1) {
      this.costs.splice(index, 1);
    }
  }

  filterCost(text: string): void {
    this.searchFilter = text;
    this.filter();
  }

  filterByDate(date: Date | null): void {
    this.dateFilter = date;
    this.filter();
  }

  filter() {
    this.filteredCosts = this.costs.filter((cost) => {
      let isFiltered = true;
      if (this.searchFilter) {
        isFiltered = isFiltered && cost.title.includes(this.searchFilter)
      }
      if (this.dateFilter) {
        isFiltered = isFiltered
          && cost.date.getDate() === this.dateFilter.getDate()
          && cost.date.getMonth() === this.dateFilter.getMonth()
          && cost.date.getFullYear() === this.dateFilter.getFullYear()
      }

      return isFiltered;
    });
  }
}

export const costsStore = new CostsStore();
