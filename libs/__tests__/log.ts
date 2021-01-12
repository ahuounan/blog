import { log } from "../log";

console.log = jest.fn();
console.warn = jest.fn();
console.error = jest.fn();
console.debug = jest.fn();
const testString = "12345678abcdefg";

describe("libs/log", () => {
  it("should log by default", () => {
    log(testString);

    expect(console.log).toHaveBeenCalledWith(`>>>${testString}`);
  });

  it("should log", () => {
    log(testString, "log");

    expect(console.log).toHaveBeenCalledWith(`>>>${testString}`);
  });

  it("should warn", () => {
    log(testString, "warn");

    expect(console.warn).toHaveBeenCalledWith(`>>>${testString}`);
  });

  it("should error", () => {
    log(testString, "error");

    expect(console.error).toHaveBeenCalledWith(`>>>${testString}`);
  });

  it("should debug", () => {
    log(testString, "debug");

    expect(console.debug).toHaveBeenCalledWith(`>>>${testString}`);
  });
});
