import { useState } from "react";
import { DialogTrigger } from "react-aria-components";

import styles from "./SnippetsPage.module.css";
import { Button } from "../../components/Button/Button.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Table } from "../../components/Table/Table.tsx";
import { SearchForm } from "../../forms/SearchForm/SearchForm.tsx";
import { CreateSnippetModal } from "../../modals/CreateSnippetModal/CreateSnippetModal.tsx";
import { useToast } from "../../components/Toast/Toast.tsx";
import { useGetSnippetsQuery } from "../../hooks/useGetSnippetsQuery.ts";

export function SnippetsPage() {
  const [createSnippetModalOpen, setCreateSnippetModalOpen] = useState(false);
  const { showToast } = useToast();
  function handleDelete(snippetId: string) {
    console.log(snippetId)
  }

  function handleCreateSnippet(/*snippet: CreateSnippetModal*/) {
    // TODO: call backend / mutation here
    showToast("Snippet created successfully!");
  }

  const { data } = useGetSnippetsQuery();

  return (
    <>
      <Header headerText="Snippet vault" />
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
                onCreate={handleCreateSnippet}
              />
            )}
          </DialogTrigger>
        </div>
        <Table snippets={data} onDelete={handleDelete} />
      </Card>
    </>
  )
}
