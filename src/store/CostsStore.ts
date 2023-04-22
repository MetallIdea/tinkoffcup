import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { Cost } from '../core/types/costs';
import { categoriesStore } from './CategoriesStore';

export interface ICostsStore {
  costs?: Cost[];

  cost?: Cost;

  setCost(cost: Cost): void;
}

export class CostsStore implements ICostsStore {
  categoriesStore = categoriesStore;

  costs: Cost[] = [];

  cost?: Cost;

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
}

export const costsStore = new CostsStore();
