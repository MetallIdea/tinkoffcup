import { makeAutoObservable } from 'mobx';
import { Type } from '../types';
import { ITemplateStore } from '../TemplateStore';

export class TemplateStoreMock implements  ITemplateStore {
  loaders = {
    fetchLoader: false,
  };

  field?: Type[];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchField() {
    this.field = [{ id: 2, }];

    this.loaders.fetchLoader = false;
  }
}

export const templateStore = new TemplateStoreMock();
