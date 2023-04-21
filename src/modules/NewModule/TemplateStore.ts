import { makeAutoObservable } from 'mobx';
import { Type } from './types';

export interface ITemplateStore {
  loaders: {
    fetchLoader: boolean;
  }

  field?: Type[];

  fetchField: () => void;
}

export class TemplateStore implements ITemplateStore {
  loaders = {
    fetchLoader: false,
  };

  field?: Type[];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchField() {
    this.field = [{ id: 1, }];
  }
}

export const templateStore = new TemplateStore();
