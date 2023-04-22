export type Category = {
  id: string;
  title: string;
}

export type Cost = {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: Category | null;
}
