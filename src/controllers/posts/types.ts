import { Identifiable } from "@controllers/types";

export interface PostData extends Identifiable {
  metadata: {
    createdAt: number;
    author: string;
  };
  title: string;
  content: string;
}
