import { readFileSync, promises as fs } from 'fs';

import { Logger } from '@libs/Logger';

import { Controller, Identifiable } from './types';

type Validate<T extends Identifiable> = (data: T) => boolean;

export class LocalDatabaseController<T extends Identifiable> implements Controller<T> {
  protected path: string;
  protected validate: Validate<T>;
  protected cache: Record<string, T> = {};
  protected ready: boolean;

  constructor(path: string, validate: Validate<T>) {
    this.path = path;
    this.validate = validate;
    const rawData = readFileSync(this.path);
    try {
      this.cache = JSON.parse(rawData.toString());
      this.ready = true;
    } catch (e) {
      Logger.log(e, 'error');
      this.cache = {};
    }
  }

  async getAll(): Promise<T[]> {
    return Object.values(this.cache);
  }

  async get(id: string): Promise<T | null> {
    if (!this.cache || !this.cache[id]) return null;

    return this.cache[id];
  }

  async create(data: T): Promise<T | null> {
    if (!this.validate(data)) {
      return null;
    }

    this.cache[data.id] = data;

    this.sync();

    return this.cache[data.id];
  }

  async update(id: string, data: T): Promise<T | null> {
    if (!this.validate(data) || id !== data.id) {
      return null;
    }

    this.cache[id] = {
      ...this.cache[id],
      ...data
    };

    this.sync();

    return this.cache[id];
  }

  async destroy(id: string): Promise<boolean> {
    delete this.cache[id];

    return this.sync();
  }

  protected async sync(): Promise<boolean> {
    try {
      await fs.writeFile(this.path, JSON.stringify(this.cache));
      return Promise.resolve(true);
    } catch (e) {
      Logger.log(e, 'error');
      return Promise.reject(false);
    }
  }
}
