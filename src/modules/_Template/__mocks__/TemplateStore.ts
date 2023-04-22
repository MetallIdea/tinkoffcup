import { makeAutoObservable } from 'mobx';
import { ITemplateStore } from '../TemplateStore';

export class TemplateStoreMock implements  ITemplateStore {
  loaders = {
    fetchLoader: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchField() {
    this.loaders.fetchLoader = false;
  }
}

export const templateStore = new TemplateStoreMock();
