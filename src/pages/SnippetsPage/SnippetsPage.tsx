import { useState } from "react";
import { DialogTrigger } from "react-aria-components";

import styles from "./SnippetsPage.module.css";
import { Button } from "../../components/Button/Button.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { Table } from "../../components/Table/Table.tsx";
import { SearchForm } from "../../forms/SearchForm/SearchForm.tsx";
import { CreateSnippetModal } from "../../modals/CreateSnippetModal/CreateSnippetModal.tsx";
import type { Types } from "../../types/types.ts";

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
  const [createSnippetModalOpen, setCreateSnippetModalOpen] = useState(false);
  function handleDelete(snippetId: string) {
    console.log(snippetId)
  }

  return (
    <Card>
      <div className={styles.menu}>
        <SearchForm onSearch={() => {}} />
        <DialogTrigger>
          <Button onPress={() => setCreateSnippetModalOpen(true)}>
            Create
          </Button>
          {createSnippetModalOpen && (
            <CreateSnippetModal
              isOpen={createSnippetModalOpen}
              onClose={() => setCreateSnippetModalOpen(false)}
              onCreate={() => {}}
            />
          )}
        </DialogTrigger>
      </div>

      <Table snippets={mockSnippets} onDelete={handleDelete} />
    </Card>
  )
}
