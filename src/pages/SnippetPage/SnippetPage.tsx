// import { useNavigate } from "@tanstack/react-router";

// import { useForm } from "react-hook-form";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { EditSnippetForm } from "../../forms/EditSnippetForm/EditSnippetForm.tsx";

const mockSnippet: EditSnippetFormValues = {
  title: "Recursion snippet",
  language: "JavaScript",
  tags: "recursion, programming",
  description: "Example recursion snippet.",
  code: "function recurse() {\n  // ...\n}",
};

export type EditSnippetFormValues = {
  title: string;
  language: string;
  tags: string;
  description: string;
  code: string;
};

export function SnippetPage() {
  // TODO: get real snippet data by snippetId (TanStack Router params + React Query)
  const snippet = mockSnippet;
  // const navigate = useNavigate();

  const handleSubmit = (values: EditSnippetFormValues) => {
    // TODO: call update API here
    console.log("Save snippet", values);
  };

  const handleCancel = () => {
    // TODO: navigate back to list or snippet detail
    window.history.back();
  };

  // const { register, handleSubmit } = useForm<EditSnippetFormValues>({
  //   defaultValues: {},
  // });

  return (
    <>
      <Breadcrumbs
        snippetTitle={snippet.title}
        snippetLanguage={snippet.language}
      />
      <Header headerText="Edit snippet"/>
      <Card>
        <EditSnippetForm
          onSubmit={handleSubmit}
          onClose={handleCancel}
        />
      </Card>
    </>
  );
}
