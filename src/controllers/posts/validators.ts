import { PostData } from "./types";

export function isPostData(data: PostData): data is PostData {
  if (!(typeof data.id === "string" || typeof data.id === "number")) {
    return false;
  }
  if (!(typeof data.content === "string")) {
    return false;
  }
  if (!(typeof data.title === "string")) {
    return false;
  }
  if (!data.metadata) {
    return false;
  }
  if (!(typeof data.metadata.createdAt === "number")) {
    return false;
  }
  if (!(typeof data.metadata.author === "string")) {
    return false;
  }
  return true;
}
