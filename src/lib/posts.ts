export type Post = {
  id: number;
  author: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    author: "Lisa",
    content: "I am learning Next.js routing!",
  },
  {
    id: 2,
    author: "Dara",
    content: "Today I learned how Route Handlers work.",
  },
  {
    id: 3,
    author: "Sokha",
    content: "Parallel Routes are useful for dashboards.",
  },
];