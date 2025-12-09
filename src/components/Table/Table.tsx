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
import type { Types } from "../../types/types.ts";
import { CopyButton } from "../CopyButton/CopyButton.tsx";

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
  snippets: Types[];
  onDelete: (id: string) => void;
}

export function Table({ snippets, onDelete }: SnippetsTableProps) {
  const navigate = useNavigate();

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
          {snippets.map((snippet) => (
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
                        onAction={() => onDelete(snippet._id)}
                      >
                        Delete
                      </MenuItem>
                    </Menu>
                  </Popover>
                </MenuTrigger>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </AriaTable>
    </div>
  );
}
