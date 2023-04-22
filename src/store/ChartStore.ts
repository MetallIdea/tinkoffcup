import { makeAutoObservable } from 'mobx';
import { categoriesStore } from './CategoriesStore';
import { ChartData } from 'chart.js';
import { getRandomColor } from '../core/helpers/colors';
import { costsStore } from './CostsStore';

export class ChartStore {
  costsStore = costsStore;

  categoriesStore = categoriesStore;

  chartData: ChartData | null = null;

  chartModalVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  showChartModal() {
    this.chartModalVisible = true;
  }

  hideChartModal() {
    this.chartModalVisible = false;
  }

  calculateChartData() {
    const isUncategorizedExist = this.costsStore.filteredCosts.some(({ category }) => !category);

    const labels = this.categoriesStore.categories.map(({title}) => title);

    if (isUncategorizedExist) {
      labels.push('uncategorized');
    }

    const data = this.categoriesStore.categories.map(({ id }) =>
      this.costsStore.filteredCosts.filter(({ category }) => id === category?.id)
        .reduce((prev, curr) => prev + curr.cost, 0));

    if (isUncategorizedExist) {
      data.push(this.costsStore.filteredCosts.filter(({ category }) => !category)
        .reduce((prev, curr) => prev + curr.cost, 0))
    }

    this.chartData = {
      labels,
      datasets: [
        {
          data: this.categoriesStore.categories.map(({ id }) =>
            this.costsStore.filteredCosts.filter(({ category }) => id === category?.id)
              .reduce((prev, curr) => prev + curr.cost, 0)),

          backgroundColor: this.categoriesStore.categories.map(() => getRandomColor()),
        }
      ],
    }
  }
}

export const chartStore = new ChartStore();
