import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../core/types/costs';

export class CategoriesStore {
  categories: Category[] = [];

  categoriesModalVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  findCategories(search: string): Category[] {
    return this.categories.filter(({ title }) => title.includes(search));
  }

  ensureCategory(categoryValue: Category | string | null): Category | null {
    if (typeof categoryValue === 'string') {
      const category = this.categories.find(({ title }) => title === categoryValue);
      if (!category) {
        const newCategory = {
          id: uuidv4(),
          title: categoryValue
        };
        this.categories.push(newCategory);

        return newCategory;
      }

      return category;
    }

    return categoryValue;
  }

  showCategoriesModal() {
    this.categoriesModalVisible = true;
  }

  hideCategoriesModal() {
    this.categoriesModalVisible = false;
  }
}

export const categoriesStore = new CategoriesStore();
