export interface Types {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string[];
  createdAt: string; // ISO string
}

export interface SearchFormValues {
  query: string;
}
