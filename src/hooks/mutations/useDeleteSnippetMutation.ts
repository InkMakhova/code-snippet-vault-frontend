import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, SNIPPETS_PATH } from "../../services/snippets.service.ts";

export function useDeleteSnippetMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`${SNIPPETS_PATH}/${id}`);
    },
    onSuccess: () => {
      // invalidate all snippet lists, regardless of filters
      queryClient.invalidateQueries({ queryKey: ["snippets"] });
    },
  });
}
