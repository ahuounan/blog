import { readFileSync, promises as fs } from "fs";

import { log } from "libs/log";

import { Controller, Identifiable, Identifier } from "./types";

type Validate<T extends Identifiable> = (data: T) => boolean;

export class LocalDatabaseController<T extends Identifiable> implements Controller<T> {
  protected path: string;
  protected validate: Validate<T>;
  protected cache: Record<string, T> = {};

  constructor(path: string, validate: Validate<T>) {
    this.path = path;
    this.validate = validate;
    try {
      const rawData = readFileSync(this.path);
      this.cache = JSON.parse(rawData.toString());
    } catch (e) {
      log(e, "error");
      this.cache = {};
    }
  }

  async getAll(): Promise<T[]> {
    return Object.values(this.cache);
  }

  async get(id: Identifier): Promise<T | null> {
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

  async update(id: Identifier, data: T): Promise<T | null> {
    if (id !== data.id || !this.validate(data)) {
      return null;
    }

    this.cache[id] = {
      ...this.cache[id],
      ...data
    };

    this.sync();

    return this.cache[id];
  }

  async destroy(id: Identifier): Promise<boolean> {
    delete this.cache[id];

    return this.sync();
  }

  protected async sync(): Promise<boolean> {
    try {
      await fs.writeFile(this.path, JSON.stringify(this.cache));
      return true;
    } catch (e) {
      log(e, "error");
      return false;
    }
  }
}
