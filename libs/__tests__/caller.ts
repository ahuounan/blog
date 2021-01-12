import { caller } from "../caller";

describe("libs/caller", () => {
  it("should log with the calling filename", () => {
    const self = caller(1);
    expect(self).toEqual("libs/__tests__/caller.ts");
  });
});
