import { useSuspenseQuery } from "@tanstack/react-query";
import { api, SNIPPETS_PATH } from "../../services/snippets.service";
import type { Snippet } from "../../types/types";

async function fetchSnippetById(id: string): Promise<Snippet> {
  const { data } = await api.get<Snippet>(`${SNIPPETS_PATH}/${id}`);
  return data;
}

export function useGetSnippetQuery(id: string) {
  return useSuspenseQuery<Snippet>({
    queryKey: ["snippet", id],
    queryFn: () => fetchSnippetById(id),
  });
}
