import { useEffect } from "react";
import {
  Button, Heading, Input, Label, TextArea, TextField
} from "react-aria-components";
import { useForm, Controller } from "react-hook-form";

import styles from "./EditSnippetForm.module.css"
import { CopyButton } from "../../components/CopyButton/CopyButton.tsx";
import { useToast } from "../../components/Toast/Toast.tsx";
import { useCreateSnippetMutation } from "../../hooks/mutations/useCreateSnippetMutation.ts";
import { useUpdateSnippetMutation } from "../../hooks/mutations/useUpdateSnippetMutation.ts";
import type { CreateSnippetPayload } from "../../types/types.ts";
import type { EditSnippetFormValues } from "../../pages/SnippetPage/SnippetPage.tsx";

function getTagsArray(valuesString: string): string[] {
  return valuesString
    ?.split(',')
    ?.map((tag) => tag.trim())
    ?.filter((tag): tag is string => tag.length > 0) || [];
}

function getPayload(values: EditSnippetFormValues): CreateSnippetPayload {
  return {
    title: values.title,
    language: values.language,
    code: values.code,
    description: values.description,
    tags: getTagsArray(values.tags),
  }
}

function Error() {
  return (<p className={styles.error}>Required</p>)
}

type SnippetFormValues = {
  _id: string;
  title: string;
  language: string;
  tags: string;
  description: string;
  code: string;
  created_at: string;
};

type Props = {
  onClose: () => void;
  isModal?: boolean;
  snippetId?: string;
  initialValues?: SnippetFormValues;
};

export function EditSnippetForm({
  onClose,
  isModal,
  snippetId,
  initialValues
}: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SnippetFormValues>({
    defaultValues: initialValues ?? {
      _id: "",
      title: "",
      language: "",
      tags: "",
      description: "",
      code: "",
      created_at: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues, { keepFieldsRef: true});
    }
  }, [initialValues, reset]);

  const { showToast } = useToast();

  const {
    mutate: createSnippet,
    isPending: isCreateSnippetPending
  } = useCreateSnippetMutation();

  const {
    mutate: updateSnippet,
    isPending: isUpdateSnippetPending
  } = useUpdateSnippetMutation();

  const isPending = isCreateSnippetPending || isUpdateSnippetPending;
  const submitButtonText = isModal ?
    (isPending ? "Creating..." : "Create snippet") :
    (isPending ? "Saving..." : "Save snippet");

  function handleSuccess(message: string): void {
    showToast(message);
    reset();
    onClose();
  }

  function handleCreateSnippet(values: EditSnippetFormValues) {
    const payload = getPayload(values);
    createSnippet(
      payload,
      {
        onSuccess: () => handleSuccess("Snippet created successfully!"),
        onError: () => showToast("Failed to created snippet"),
      }
    );
  }

  function handleUpdateSnippet(values: EditSnippetFormValues) {
    const payload = getPayload(values);
    updateSnippet(
      { id: snippetId, data: payload },
      {
        onSuccess: () => handleSuccess("Snippet updated successfully!"),
        onError: () => showToast("Failed to update snippet"),
      },
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((values) => {
        isModal ? handleCreateSnippet(values) : handleUpdateSnippet(values);
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
          <Controller
            control={control}
            name="title"
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                placeholder="input title"
              />
            )}
          />
          {errors.title && (<Error />)}
        </TextField>

        <TextField className={styles.field}>
          <Label className={styles.label}>Language</Label>
          <Controller
            control={control}
            name="language"
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                placeholder="input language"
              />
            )}
          />
          {errors.language && (<Error />)}
        </TextField>

        <TextField className={styles.field}>
          <Label className={styles.label}>Tags</Label>
          <Controller
            control={control}
            name="tags"
            render={({ field }) => (
              <Input
                {...field}
                className={styles.input}
                placeholder="comma separated"
              />
            )}
          />
        </TextField>
      </div>
      <div className={styles.rowFull}>
        <TextField className={styles.fieldFull}>
          <Label className={styles.label}>Description</Label>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <TextArea
                {...field}
                className={styles.textarea}
                rows={3}
                placeholder="input description"
              />
            )}
          />
        </TextField>
      </div>

      <div className={styles.rowFull}>
        <TextField className={styles.fieldFull}>
          <Label className={styles.label}>Code</Label>
          <Controller
            control={control}
            name="code"
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <TextArea
                  {...field}
                  className={`${styles.textarea} ${styles.codeArea}`}
                  rows={20}
                  placeholder="input code snippet"
                />
                {!isModal? (
                  <CopyButton
                    textToCopy={field.value}
                    toastText="Code copied!"
                    ariaLabel="copy code snippet"
                  />): null
                }
              </>
            )}
          />
          {errors.code && (<Error />)}
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
          {submitButtonText}
        </Button>
      </div>
    </form>
  )
}
