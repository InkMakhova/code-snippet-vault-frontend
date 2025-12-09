import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/snippets.service";
import type { CreateSnippetPayload } from "../../types/types.ts";

export function useCreateSnippetMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateSnippetPayload) => {
      await api.post("/snippets", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["snippets"] });
    },
  });
}
