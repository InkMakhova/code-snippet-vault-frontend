import { useSuspenseQuery } from "@tanstack/react-query";
import type { Snippet } from "../../types/types.ts";
import { api, SNIPPETS_PATH } from "../../services/snippets.service.ts";

type SnippetApi = {
  _id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string[];
  created_at: string;
};

export type SnippetFilters = {
  lang?: string;
};

export async function fetchSnippets(filters: SnippetFilters = {}): Promise<Snippet[]> {
  const { lang } = filters;
  const { data } = await api.get<SnippetApi[]>(SNIPPETS_PATH, {
    params: {
      lang: lang || undefined,
    }
  });
  return data;
}

export function useGetSnippetsQuery(filters: SnippetFilters) {
  return useSuspenseQuery<Snippet[]>({
    queryKey: ["snippets"],
    queryFn: () => fetchSnippets(filters),
  });
}
