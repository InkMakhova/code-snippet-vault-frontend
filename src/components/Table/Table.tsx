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
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { mutate } = useDeleteSnippetMutation();

  function handleDelete(snippetId: string) {
    mutate(snippetId,{
      onSuccess: () => {
        showToast("Successfully deleted snippet")
      },
      onError: () => showToast("Failed to delete snippet"),
    })
  }

  return (
    <div className={styles.container}>
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
                        onAction={() => handleDelete(snippet._id)}
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
