import fs from 'fs';

import { LocalDatabaseController } from '@controllers/localController';
import { Identifiable } from '@controllers/types';
import * as LoggerModule from '@libs/Logger';

describe('controllers/localController', () => {
  const testData = { 1: { id: 1, test: 'test' } };
  const testDataAdd = { id: 2, test2: 'test2' };
  const testDataUpdate = { id: 1, test: 'test2' };
  const testPath = 'testPath';
  let validate;
  let localController;
  let validateFail;
  let localControllerFail;

  beforeAll(() => {
    jest.mock('fs');
    jest.mock('@libs/Logger');
    fs.readFileSync = jest.fn(() => JSON.stringify({ 1: { id: 1, test: 'test' } }));
    LoggerModule.Logger = jest.fn();
    fs.promises.writeFile = jest.fn(() => Promise.resolve());
  });

  beforeEach(() => {
    validate = jest.fn(() => true);
    localController = new LocalDatabaseController(testPath, validate);
    validateFail = jest.fn(() => false);
    localControllerFail = new LocalDatabaseController(testPath, validateFail);
  });

  it('should instantiate', () => {
    expect(localController).toBeInstanceOf(LocalDatabaseController);
  });

  it('should getAll', async () => {
    expect(await localController.getAll()).toEqual(Object.values(testData));
  });

  it('should get', async () => {
    expect(await localController.get(1)).toEqual(testData[1]);
    expect(await localController.get('notInData')).toBeNull();
  });

  it('should create if validated', async () => {
    expect(await localController.create(testDataAdd)).toEqual(testDataAdd);
    expect(validate).toHaveBeenCalled();
    const cache = {
      ...testData,
      2: testDataAdd
    };
    expect(fs.promises.writeFile).toHaveBeenCalledWith(testPath, JSON.stringify(cache));
  });

  it('should not create if not validated', async () => {
    validate = jest.fn(() => false);

    expect(await localControllerFail.create(testDataAdd)).toBeNull();
    expect(validateFail).toHaveBeenCalled();
    expect(fs.promises.writeFile).not.toHaveBeenCalled();
  });

  it('should update if validated', async () => {
    expect(await localController.update(1, testDataUpdate)).toEqual(testDataUpdate);
    expect(validate).toHaveBeenCalled();
    const cache = { 1: testDataUpdate };
    expect(fs.promises.writeFile).toHaveBeenCalledWith(testPath, JSON.stringify(cache));
  });

  it('should not update if not validated', async () => {
    expect(await localControllerFail.update(1, testDataUpdate)).toBeNull();
    expect(validateFail).toHaveBeenCalled();
    expect(fs.promises.writeFile).not.toHaveBeenCalled();
  });

  it('should destroy', async () => {
    expect(await localController.destroy(1)).toBe(true);
    expect(fs.promises.writeFile).toHaveBeenCalledWith(testPath, JSON.stringify({}));
  });
});
