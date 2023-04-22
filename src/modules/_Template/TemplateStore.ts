import { makeAutoObservable } from 'mobx';

export interface ITemplateStore {
  loaders: {
    fetchLoader: boolean;
  }

  fetchField: () => void;
}

export class TemplateStore implements ITemplateStore {
  loaders = {
    fetchLoader: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchField() {
  }
}

export const templateStore = new TemplateStore();
