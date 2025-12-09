import {
  Button, Heading, Input, Label, TextArea, TextField
} from "react-aria-components";
import { useForm } from "react-hook-form";

import styles from "./EditSnippetForm.module.css"
import { CopyButton } from "../../components/CopyButton/CopyButton.tsx";
import { useCreateSnippetMutation } from "../../hooks/mutations/useCreateSnippetMutation.ts";
import { useToast } from "../../components/Toast/Toast.tsx";
import type { CreateSnippetPayload } from "../../types/types.ts";

type SnippetFormValues = {
  title: string;
  language: string;
  tags: string;
  description: string;
  code: string;
};

type Props = {
  onClose: () => void;
  isModal?: boolean;
};

export function EditSnippetForm({
  onClose,
  isModal,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<SnippetFormValues>({
    defaultValues: {
      title: "",
      language: "",
      tags: "",
      description: "",
      code: "",
    },
  });

  const { showToast } = useToast();
  const { mutate, isPending } = useCreateSnippetMutation();

  function handleCreateSnippet(
    values: Omit<CreateSnippetPayload, "tags"> & { tags: string }
  ) {
    const tags = values.tags
      ?.split(',')
      ?.map((tag) => tag.trim())
      ?.filter((tag): tag is string => tag.length > 0) || [];

    const payload: CreateSnippetPayload = {
      title: values.title,
      language: values.language,
      code: values.code,
      description: values.description,
      tags: tags,
    };

    mutate(payload, {
      onSuccess: () => {
        showToast("Snippet created successfully!");
        reset();
        onClose();
      },
      onError: () => {
        showToast("Failed to create snippet");
      },
    });
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((values) => {
        handleCreateSnippet(values)
      })}
    >
      {isModal && (
        <div className={styles.header}>
          <Heading slot="title" className={styles.title}>
            Create snippet
          </Heading>
          <Button
            aria-label="Close"
            className={styles.closeButton}
            onPress={onClose}
          >
            ×
          </Button>
        </div>
      )}

      <div className={styles.row}>
        <TextField className={styles.field}>
          <Label className={styles.label}>Title</Label>
          <Input
            className={styles.input}
            {...register("title", { required: true })}
            placeholder="input title"
          />
        </TextField>

        <TextField className={styles.field}>
          <Label className={styles.label}>Language</Label>
          <Input
            className={styles.input}
            {...register("language", { required: true })}
            placeholder="input language"
          />
        </TextField>

        <TextField className={styles.field}>
          <Label className={styles.label}>Tags</Label>
          <Input
            className={styles.input}
            placeholder="comma separated"
            {...register("tags")}
          />
        </TextField>
      </div>

      <div className={styles.rowFull}>
        <TextField className={styles.fieldFull}>
          <Label className={styles.label}>Description</Label>
          <TextArea
            className={styles.textarea}
            rows={3}
            {...register("description")}
            placeholder="input description"
          />
        </TextField>
      </div>

      <div className={styles.rowFull}>
        <TextField className={styles.fieldFull}>
          <Label className={styles.label}>Code</Label>
            <TextArea
              className={`${styles.textarea} ${styles.codeArea}`}
              rows={20}
              {...register("code", { required: true })}
              placeholder="input code snippet"
            />
            {!isModal? (
              <CopyButton
                textToCopy={"some"}
                toastText="Code copied!"
                ariaLabel="copy code snippet"
              />) : null
            }
        </TextField>

      </div>

      <div className={styles.footer}>
        <Button
          type="button"
          className={`${styles.cancel} ${isPending ? styles.loading : ""}`}
          onPress={() => {
            reset();
            onClose();
          }}
          isDisabled={isPending}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className={`${styles.submit} ${isPending ? styles.loading : ""}`}
          isDisabled={isPending}
        >
          {isPending ? "Creating..." : "Create snippet"}
        </Button>
      </div>
    </form>
  )
}
