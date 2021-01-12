import { PostData } from "../types";
import { isPostData } from "../validators";

const VALID_DATA: PostData = {
  id: 1,
  metadata: {
    createdAt: 1610388199612,
    author: "Alan Hu"
  },
  title: "test title",
  content: "test content"
};

const MISSING_ID = {
  metadata: {
    createdAt: 1610388199612,
    author: "Alan Hu"
  },
  title: "test title",
  content: "test content"
};

const MISSING_CONTENT = {
  id: 1,
  metadata: {
    createdAt: 1610388199612,
    author: "Alan Hu"
  },
  title: "test title"
};

const CONTENT_NUMBER = {
  id: 1,
  metadata: {
    createdAt: 1610388199612,
    author: "Alan Hu"
  },
  title: "test title",
  content: 2
};

const MISSING_METADATA = {
  id: 1,
  title: "test title",
  content: "test content"
};

const MISSING_CREATED = {
  id: 1,
  metadata: {
    author: "Alan Hu"
  },
  title: "test title",
  content: "test content"
};

const MISSING_AUTHOR = {
  id: 1,
  metadata: {
    createdAt: 1610388199612
  },
  title: "test title",
  content: "test content"
};

const MISSING_TITLE = {
  id: 1,
  metadata: {
    createdAt: 1610388199612,
    author: "Alan Hu"
  },
  content: "test content"
};

const INVALID_DATA = [
  MISSING_CONTENT,
  CONTENT_NUMBER,
  MISSING_ID,
  MISSING_AUTHOR,
  MISSING_CREATED,
  MISSING_METADATA,
  MISSING_TITLE
];

describe("controllers/posts/validators", () => {
  it("should return true for valid data", () => {
    expect(isPostData(VALID_DATA)).toBe(true);
  });

  it("should return false for invalid data", () => {
    INVALID_DATA.forEach(data => {
      expect(isPostData(data as PostData)).toBe(false);
    });
  });
});
