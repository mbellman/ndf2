export interface Author {
  name: string;
  points: number;
}

export interface BasicThread {
  title: string;
  message: string;
  author: Author;
  replies: number;
  views: number;
  date: Date;
}