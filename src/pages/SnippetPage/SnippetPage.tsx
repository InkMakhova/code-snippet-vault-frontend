import { useParams } from "@tanstack/react-router";

import { snippetRoute } from "../../router/router.tsx";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { EditSnippetForm } from "../../forms/EditSnippetForm/EditSnippetForm.tsx";
import { useGetSnippetQuery } from "../../hooks/queries/useGetSnippetQuery.ts";

export type EditSnippetFormValues = {
  title: string;
  language: string;
  tags: string;
  description: string;
  code: string;
};

export function SnippetPage() {
  const { snippetId } = useParams({ from: snippetRoute.id });

  const { data: snippet } = useGetSnippetQuery(snippetId);

  const initialValues = {
    _id: snippet._id,
    title: snippet.title,
    language: snippet.language,
    tags: snippet.tags.join(", "),
    description: snippet.description,
    code: snippet.code,
    created_at: snippet.created_at,
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <>
      <Breadcrumbs
        snippetTitle={snippet.title}
        snippetLanguage={snippet.language}
      />
      <Header headerText="Edit snippet"/>
      <Card>
        <EditSnippetForm
          onClose={handleCancel}
          snippetId={snippetId}
          initialValues={initialValues}
        />
      </Card>
    </>
  );
}
