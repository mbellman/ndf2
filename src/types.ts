export interface Author {
  name: string;
  points: number;
}

export interface PostPreview {
  title: string;
  message: string;
  author: Author;
  replies: number;
  date: Date;
}