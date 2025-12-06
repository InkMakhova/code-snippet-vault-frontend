import {
  Table as AriaTable,
  TableHeader,
  Column,
  Row,
  TableBody,
  Cell,
} from "react-aria-components";
import styles from "./Table.module.css";
import type { Types } from "../../types/types.ts";

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
  onDelete?: (id: string) => void;
}

export function Table({ snippets, onDelete }: SnippetsTableProps) {
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
            <Row key={snippet.id}>
              <Cell>{snippet.title}</Cell>
              <Cell>{snippet.language}</Cell>
              <Cell>
                <pre className={styles.pre}>
                  <code>{snippet.code}</code>
                </pre>
              </Cell>
              <Cell>{snippet.description}</Cell>
              <Cell>{snippet.tags.join(", ")}</Cell>
              <Cell>
                {new Date(snippet.createdAt).toLocaleString()}
              </Cell>
              <Cell>
                <button
                  className="snippets-delete-button"
                  onClick={() => onDelete?.(snippet.id)}
                >
                  Delete
                </button>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </AriaTable>
    </div>
  );
}
