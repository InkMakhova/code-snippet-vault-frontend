import { useState } from "react";
import { DialogTrigger } from "react-aria-components";

import styles from "./SnippetsPage.module.css";
import { Button } from "../../components/Button/Button.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Table } from "../../components/Table/Table.tsx";
import { SearchForm } from "../../forms/SearchForm/SearchForm.tsx";
import { CreateSnippetModal } from "../../modals/CreateSnippetModal/CreateSnippetModal.tsx";
import { useGetSnippetsQuery } from "../../hooks/queries/useGetSnippetsQuery.ts";

export function SnippetsPage() {
  const [createSnippetModalOpen, setCreateSnippetModalOpen] = useState(false);

  const { data } = useGetSnippetsQuery({ lang: "" });

  return (
    <>
      <Header headerText="Snippet vault" isHome />
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
              />
            )}
          </DialogTrigger>
        </div>
        <Table snippets={data} />
      </Card>
    </>
  )
}
