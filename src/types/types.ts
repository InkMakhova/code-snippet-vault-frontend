export interface Snippet {
  _id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string[];
  created_at: string;
}

export type CreateSnippetPayload = Omit<Snippet, '_id' | 'created_at'>;

export interface SearchFormValues {
  query: string;
}
