export interface PostData {
  id: string;
  metadata: {
    createdAt: number;
    author: string;
  };
  content: string;
}
