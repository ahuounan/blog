export interface Controller<T> {
  getAll: () => Promise<T[]>;
  get: (id: string) => Promise<T | null>;
  create: (data: T) => Promise<T | null>;
  update: (id: string, data: T) => Promise<T | null>;
  destroy: (id: string) => Promise<boolean>;
}

export interface Identifiable {
  id: Identifier;
}

export type Identifier = string | number;
