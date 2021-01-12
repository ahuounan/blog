import fs from "fs";

import { log } from "libs/log";

import { LocalDatabaseController } from "../localController";

interface TEST_DATA_TYPE {
  id: number;
  test: string;
}
const TEST_PATH = "localDatabase/test.json";
const TEST_PATH_INVALID = "invalid";
const TEST_DATA: Record<string, TEST_DATA_TYPE> = { 1: { id: 1, test: "test" } };
const TEST_DATA_ADD: TEST_DATA_TYPE = { id: 2, test: "test2" };
const TEST_DATA_UPDATE: TEST_DATA_TYPE = { id: 1, test: "test2" };

jest.mock("fs", () => ({
  readFileSync: jest.fn(path => {
    if (path === TEST_PATH) {
      return JSON.stringify(TEST_DATA);
    }
    throw new Error();
  }),
  promises: {
    writeFile: jest.fn(path => {
      if (path === TEST_PATH) {
        return Promise.resolve();
      }
      return Promise.reject();
    })
  }
}));
jest.mock("libs/log", () => ({
  log: jest.fn()
}));

const validate = jest.fn(() => true);
const validateFail = jest.fn(() => false);

describe("controllers/localController", () => {
  describe("constructor", () => {
    it("should instantiate", () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);

      expect(localController).toBeInstanceOf(LocalDatabaseController);
      expect(fs.readFileSync).toHaveBeenCalledWith(TEST_PATH);
    });

    it("should log an error if readFile failed", () => {
      new LocalDatabaseController(TEST_PATH_INVALID, validate);

      expect(log).toHaveBeenCalled();
    });
  });

  describe("getAll", () => {
    it("should return all values", async () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);

      expect(await localController.getAll()).toEqual(Object.values(TEST_DATA));
    });
  });

  describe("get", () => {
    it("should return found values", async () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);

      expect(await localController.get(1)).toEqual(TEST_DATA[1]);
    });

    it("should return null if nothing found", async () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);

      expect(await localController.get(2)).toBeNull();
    });
  });

  describe("create", () => {
    it("should create if validated", async () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);
      const cache = {
        ...TEST_DATA,
        2: TEST_DATA_ADD
      };

      expect(await localController.create(TEST_DATA_ADD)).toEqual(TEST_DATA_ADD);
      expect(validate).toHaveBeenCalled();
      expect(fs.promises.writeFile).toHaveBeenCalledWith(TEST_PATH, JSON.stringify(cache));
    });

    it("should not create if not validated", async () => {
      const localControllerFail = new LocalDatabaseController(TEST_PATH, validateFail);

      expect(await localControllerFail.create(TEST_DATA_ADD)).toBeNull();
      expect(validateFail).toHaveBeenCalled();
      expect(fs.promises.writeFile).not.toHaveBeenCalled();
    });

    it("should log an error if create writeFile failed", async () => {
      const localControllerError = new LocalDatabaseController(TEST_PATH_INVALID, validate);
      localControllerError.create(TEST_DATA_ADD);

      expect(log).toHaveBeenCalled();
    });
  });

  describe("update", () => {
    it("should update if validated", async () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);
      const cache = { 1: TEST_DATA_UPDATE };

      expect(await localController.update(1, TEST_DATA_UPDATE)).toEqual(TEST_DATA_UPDATE);
      expect(validate).toHaveBeenCalled();
      expect(fs.promises.writeFile).toHaveBeenCalledWith(TEST_PATH, JSON.stringify(cache));
    });

    it("should return null if id not found", async () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);

      expect(await localController.update(2, TEST_DATA_UPDATE)).toBeNull();
      expect(validate).not.toHaveBeenCalled();
      expect(fs.promises.writeFile).not.toHaveBeenCalled();
    });

    it("should return null if not validated", async () => {
      const localControllerFail = new LocalDatabaseController(TEST_PATH, validateFail);

      expect(await localControllerFail.update(1, TEST_DATA_UPDATE)).toBeNull();
      expect(validateFail).toHaveBeenCalled();
      expect(fs.promises.writeFile).not.toHaveBeenCalled();
    });

    it("should log an error if update writeFile failed", async () => {
      const localControllerError = new LocalDatabaseController(TEST_PATH_INVALID, validate);
      localControllerError.update(1, TEST_DATA_UPDATE);

      expect(log).toHaveBeenCalled();
    });
  });

  describe("destroy", () => {
    it("should destroy", async () => {
      const localController = new LocalDatabaseController(TEST_PATH, validate);

      expect(await localController.destroy(1)).toBe(true);
      expect(fs.promises.writeFile).toHaveBeenCalledWith(TEST_PATH, JSON.stringify({}));
    });

    it("should log an error if destroy writeFile failed", async () => {
      const localControllerError = new LocalDatabaseController(TEST_PATH_INVALID, validate);
      localControllerError.destroy(1);

      expect(log).toHaveBeenCalled();
    });
  });
});
