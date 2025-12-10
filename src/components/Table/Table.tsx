import {
  Table as AriaTable,
  TableHeader,
  Column,
  Row,
  TableBody,
  Cell,
  MenuTrigger,
  Button,
  Menu,
  MenuItem, Popover,
} from "react-aria-components";
import { useNavigate } from "@tanstack/react-router";
import dayjs from "dayjs";

import styles from "./Table.module.css";
import { CopyButton } from "../CopyButton/CopyButton.tsx";
import { useDeleteSnippetMutation } from "../../hooks/mutations/useDeleteSnippetMutation.ts";
import { useToast } from "../Toast/Toast.tsx";
import type { Snippet } from "../../types/types.ts";
import {useState} from "react";
import {DeleteSnippetModal} from "../../modals/DeleteSnippetModal/DeleteSnippetModal.tsx";

const columns = [
  "Title",
  "Language",
  "Code",
  "Description",
  "Tags",
  "Created",
  "Actions",
];

interface SnippetsTableProps {
  snippets: Snippet[];
}

export function Table({ snippets }: SnippetsTableProps) {
  const [snippetToDelete, setSnippetToDelete] = useState<Snippet | null>(null);

  const navigate = useNavigate();
  const { showToast } = useToast();
  const { mutate, isPending } = useDeleteSnippetMutation();

  function handleDelete(snippetId: string) {
    mutate(snippetId,{
      onSuccess: () => {
        showToast("Successfully deleted snippet");
        setSnippetToDelete(null);
      },
      onError: () => showToast("Failed to delete snippet"),
    })
  }

  function confirmDelete() {
    if (!snippetToDelete) return;
    const { _id } = snippetToDelete;
    handleDelete(_id);
  }

  return (
    <div className={styles.container}>
      <DeleteSnippetModal
        isOpen={!!snippetToDelete}
        snippetTitle={snippetToDelete?.title}
        onConfirm={confirmDelete}
        onClose={() => setSnippetToDelete(null)}
        isPending={isPending}
      />
      <AriaTable aria-label="Code snippets" className={styles.table}>
        <TableHeader>
          {columns.map((column: string, index: number) => (
            <Column key={column} isRowHeader={index === 0}>
              {column}
            </Column>
          ))}
        </TableHeader>
        <TableBody>
          {snippets.length > 0 ?
            snippets.map((snippet) => (
            <Row key={snippet._id}>
              <Cell>{snippet.title}</Cell>
              <Cell>{snippet.language}</Cell>
              <Cell>
                <pre className={styles.pre}>
                  <code>{snippet.code}</code>
                  <CopyButton
                    textToCopy={snippet.code}
                    toastText="Code copied!"
                    ariaLabel="copy code snippet"
                  />
                </pre>
              </Cell>
              <Cell>{snippet.description}</Cell>
              <Cell>{snippet.tags.join(", ")}</Cell>
              <Cell>
                {dayjs(snippet.created_at).format("DD.MM.YYYY, HH:mm")}
              </Cell>
              <Cell>
                <MenuTrigger>
                  <Button className={styles["menu-button"]}>⋮</Button>
                  <Popover placement="bottom right">
                    <Menu className={styles.menu}>
                      <MenuItem
                        className={styles["menu-item"]}
                        onAction={() =>
                          navigate({ to: "/snippets/$snippetId", params: { snippetId: snippet._id } })
                        }
                      >
                        Edit
                      </MenuItem>
                      <MenuItem
                        className={styles["menu-item-delete"]}
                        onAction={() => setSnippetToDelete(snippet)}
                      >
                        Delete
                      </MenuItem>
                    </Menu>
                  </Popover>
                </MenuTrigger>
              </Cell>
            </Row>)) :
            <Row>
              <Cell colSpan={7}>No snippets data</Cell>
            </Row>
          }
        </TableBody>
      </AriaTable>
    </div>
  );
}
