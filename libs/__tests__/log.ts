import { log } from "../log";

console.log = jest.fn();
console.warn = jest.fn();
console.error = jest.fn();
console.debug = jest.fn();
const testString = "12345678abcdefg";

jest.mock("../caller", () => ({
  caller: jest.fn(() => "test")
}));

describe("libs/log", () => {
  it("should log", () => {
    log(testString, "log");

    expect(console.log).toHaveBeenCalledWith(`>>>test:\n${testString}`);
  });

  it("should warn", () => {
    log(testString, "warn");

    expect(console.warn).toHaveBeenCalledWith(`>>>test:\n${testString}`);
  });

  it("should error", () => {
    log(testString, "error");

    expect(console.error).toHaveBeenCalledWith(`>>>test:\n${testString}`);
  });

  it("should debug", () => {
    log(testString, "debug");

    expect(console.debug).toHaveBeenCalledWith(`>>>test:\n${testString}`);
  });
});
