import axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { Types } from "../types/types.ts";

export const api = axios.create({
  baseURL: "https://snippet-api-ulwt.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

type SnippetApi = {
  _id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string[];
  created_at: string;
};

export async function fetchSnippets(): Promise<Types[]> {
  const { data } = await api.get<SnippetApi[]>("/snippets");
  return data;
}

export function useGetSnippetsQuery() {
  return useSuspenseQuery<Types[]>({
    queryKey: ["snippets"],
    queryFn: fetchSnippets,
  });
}
