import {SearchForm} from "../../forms/SearchForm/SearchForm.tsx";
import {Button} from "../../components/Button/Button.tsx";
import type {Types} from "../../types/types.ts";
import {Card} from "../../components/Card/Card.tsx";
import styles from "./SnippetsPage.module.css";
import {Table} from "../../components/Table/Table.tsx";

const mockSnippets: Types[] = [
  {
    id: "1",
    title: "Recursion",
    language: "js",
    code: "<code> snippet </code>",
    description: "Description somewhat",
    tags: ["recursion", "programming"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Test snippet C++",
    language: "C++",
    code: `#include <iostream>
int main() {
  std::cout << "Hello World!";
  return 0;
}`,
    description: "Hello world snippet in C++",
    tags: ["C++", "programming", "snippet"],
    createdAt: new Date().toISOString(),
  },
];

export function SnippetsPage() {
  function handleDelete(snippetId: string) {
    console.log(snippetId)
  }

  return (
    <Card>
      <div className={styles.menu}>
        <SearchForm onSearch={() => {}} />
        <Button>Add snippet</Button>
      </div>

      <Table snippets={mockSnippets} onDelete={handleDelete} />
    </Card>
  )
}
