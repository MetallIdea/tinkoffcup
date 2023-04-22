import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { Cost } from '../core/types/costs';
import { categoriesStore } from './CategoriesStore';
import { ChartData } from 'chart.js';
import { getRandomColor } from '../core/helpers/colors';

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

  chartData: ChartData | null = null;

  searchFilter = '';

  startDate: Date | null = null;

  endDate: Date | null = null;

  categoriesFilter: string | null = null;

  chartModalVisible = false;

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

  filterByStartDate(date: Date | null): void {
    this.startDate = date;
    this.filter();
  }

  filterByEndDate(date: Date | null): void {
    this.endDate = date;
    this.filter();
  }

  filterByCategories(category: string | null): void {
    this.categoriesFilter = category;
    this.filter();
  }

  filter() {
    this.filteredCosts = this.costs.filter((cost) => {
      let isFiltered = true;
      if (this.searchFilter) {
        isFiltered = isFiltered && cost.title.includes(this.searchFilter)
      }
      if (this.startDate) {
        isFiltered = isFiltered
          && cost.date.getTime() > this.startDate.getTime()
      }
      if (this.endDate) {
        const endDate = new Date(this.endDate);
        endDate.setDate(this.endDate.getDate() + 1)
        isFiltered = isFiltered
          && cost.date.getTime() < endDate.getTime()
      }

      if (this.categoriesFilter) {
        isFiltered = isFiltered
          && cost.category?.id === this.categoriesFilter;
      }

      return isFiltered;
    }).sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });
  }

  resetFilter() {
    this.searchFilter = '';
    this.startDate = null;
    this.endDate = null;
    this.categoriesFilter = null;
  }

  showChartModal() {
    this.chartModalVisible = true;
  }

  hideChartModal() {
    this.chartModalVisible = false;
  }

  calculateChartData() {
    const isUncategorizedExist = this.filteredCosts.some(({ category }) => !category);

    const labels = this.categoriesStore.categories.map(({title}) => title);

    if (isUncategorizedExist) {
      labels.push('uncategorized');
    }

    const data = this.categoriesStore.categories.map(({ id }) =>
      this.filteredCosts.filter(({ category }) => id === category?.id)
        .reduce((prev, curr) => prev + curr.cost, 0));

    if (isUncategorizedExist) {
      data.push(this.filteredCosts.filter(({ category }) => !category)
        .reduce((prev, curr) => prev + curr.cost, 0))
    }

    this.chartData = {
      labels,
      datasets: [
        {
          data: this.categoriesStore.categories.map(({ id }) =>
            this.filteredCosts.filter(({ category }) => id === category?.id)
              .reduce((prev, curr) => prev + curr.cost, 0)),

          backgroundColor: this.categoriesStore.categories.map(() => getRandomColor()),
        }
      ],
    }
  }
}

export const costsStore = new CostsStore();
