import MOCK_POSTS from "localDatabase/mockPosts.json";

import { PostsController } from "../index";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => JSON.stringify(MOCK_POSTS))
}));

const MOCK_POSTS_ARRAY = Object.values(MOCK_POSTS);

describe("controllers/posts", () => {
  it("should getAll", async () => {
    expect(await PostsController.getAll()).toEqual(Object.values(MOCK_POSTS_ARRAY));
  });

  it("should get valid data", async () => {
    expect(await PostsController.get(MOCK_POSTS_ARRAY[1].id)).toEqual(MOCK_POSTS_ARRAY[1]);
  });

  it("should get null data", async () => {
    expect(await PostsController.get(15)).toBeNull();
  });
});
