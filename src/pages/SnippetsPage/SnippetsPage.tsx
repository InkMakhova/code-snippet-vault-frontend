import { Suspense, useState } from "react";
import { DialogTrigger } from "react-aria-components";
import { useIsFetching } from "@tanstack/react-query";

import styles from "./SnippetsPage.module.css";
import { Button } from "../../components/Button/Button.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Table } from "../../components/Table/Table.tsx";
import { TableSkeleton } from "./SnippetsPageSkeleton/TableSkeleton.tsx";
import { SearchForm } from "../../forms/SearchForm/SearchForm.tsx";
import { CreateSnippetModal } from "../../modals/CreateSnippetModal/CreateSnippetModal.tsx";
import { useGetSnippetsQuery } from "../../hooks/queries/useGetSnippetsQuery.ts";

function SnippetsTableSection({ langFilter }: { langFilter: string }) {
  const { data } = useGetSnippetsQuery({ lang: langFilter || undefined });
  return <Table snippets={data} />;
}

export function SnippetsPage() {
  const [createSnippetModalOpen, setCreateSnippetModalOpen] = useState(false);
  const [langFilter, setLangFilter] = useState("");

  const isFetchingSnippets =
    useIsFetching({
      queryKey: ["snippets", { lang: langFilter || undefined }],
    }) > 0;

  function handleSearch(query: string) {
    setLangFilter(query.trim());
  }

  return (
    <>
      <Header headerText="Snippet vault" isHome />
      <Card>
        <div className={styles.menu}>
          <SearchForm onSearch={handleSearch} isDisabled={isFetchingSnippets} />
          <DialogTrigger>
            <Button
              onPress={() => setCreateSnippetModalOpen(true)}
              isDisabled={isFetchingSnippets}
            >
              Create snippet
            </Button>
            {createSnippetModalOpen && (
              <CreateSnippetModal
                isOpen={createSnippetModalOpen}
                onClose={() => setCreateSnippetModalOpen(false)}
              />
            )}
          </DialogTrigger>
        </div>
        <Suspense fallback={<TableSkeleton />}>
          <SnippetsTableSection langFilter={langFilter} />
        </Suspense>
      </Card>
    </>
  )
}
