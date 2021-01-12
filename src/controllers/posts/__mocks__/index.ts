import { LocalDatabaseController } from "@controllers/localController";
import { Identifier } from "@controllers/types";
import MOCK_POSTS from "localDatabase/mockPosts.json";

import { PostData } from "../types";

export const PostsController: LocalDatabaseController<PostData> = {
  async getAll(): Promise<PostData[]> {
    return Promise.resolve(Object.values(MOCK_POSTS));
  },
  async get(id: Identifier): Promise<PostData> {
    const post = MOCK_POSTS[id];
    return Promise.resolve(post ?? null);
  }
} as LocalDatabaseController<PostData>;
