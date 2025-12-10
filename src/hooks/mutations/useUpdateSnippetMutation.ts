import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, SNIPPETS_PATH } from "../../services/snippets.service";
import type { CreateSnippetPayload } from "../../types/types";

type UpdateSnippetArgs = {
  id: string | undefined;
  data: CreateSnippetPayload;
};

export function useUpdateSnippetMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: UpdateSnippetArgs) => {
      if (!id) return;
      await api.put(`${SNIPPETS_PATH}/${id}`, data);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["snippets"] });
      queryClient.invalidateQueries({ queryKey: ["snippet", variables.id] });
    },
  });
}
