export interface Types {
  _id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string[];
  created_at: string; // ISO string
}

export interface SearchFormValues {
  query: string;
}
