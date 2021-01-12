import { Identifier } from "@controllers/types";

import { PostsController } from "../index";
import { PostData } from "../types";

const TEST_DATA: Record<Identifier, PostData> = {
  1: {
    id: 1,
    metadata: {
      createdAt: 1610388199612,
      author: "Alan Hu"
    },
    title: "test title",
    content: "test content"
  },
  2: {
    id: 2,
    metadata: {
      createdAt: 1610388199612,
      author: "Alan Hu"
    },
    title: "test title 2",
    content: "test content 2"
  }
};

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => JSON.stringify(TEST_DATA))
}));

describe("controllers/posts", () => {
  it("should getAll", async () => {
    expect(await PostsController.getAll()).toEqual(Object.values(TEST_DATA));
  });

  it("should get valid data", async () => {
    expect(await PostsController.get(1)).toEqual(TEST_DATA[1]);
  });

  it("should get null data", async () => {
    expect(await PostsController.get(3)).toBeNull();
  });
});
