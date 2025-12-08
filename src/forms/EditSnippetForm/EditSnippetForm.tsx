import {
  Button, Heading, Input, Label, TextArea, TextField
} from "react-aria-components";
import { useForm } from "react-hook-form";

import styles from "./EditSnippetForm.module.css"

type SnippetFormValues = {
  title: string;
  language: string;
  tags: string;
  description: string;
  code: string;
};

type Props = {
  onSubmit: (values: SnippetFormValues) => void;
  onClose?: () => void;
};

export function EditSnippetForm({
  onSubmit,
  onClose,
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

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((values) => {
        onSubmit(values);
        reset();
        if (onClose) onClose();
      })}
    >
      {/* Header */}
      <div className={styles.header}>
        <Heading slot="title" className={styles.title}>
          Create snippet
        </Heading>
        <Button
          aria-label="Close"
          onPress={() => close()}
          className={styles.closeButton}
        >
          ×
        </Button>
      </div>

      <div className={styles.row}>
        <TextField className={styles.field}>
          <Label className={styles.label}>Title</Label>
          <Input
            className={styles.input}
            {...register("title", { required: true })}
          />
        </TextField>

        <TextField className={styles.field}>
          <Label className={styles.label}>Language</Label>
          <Input
            className={styles.input}
            {...register("language", { required: true })}
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
          />
        </TextField>
      </div>

      {/* Row 3: Code textarea (full width, 15 lines) */}
      <div className={styles.rowFull}>
        <TextField className={styles.fieldFull}>
          <Label className={styles.label}>Code</Label>
          <TextArea
            className={`${styles.textarea} ${styles.codeArea}`}
            rows={15}
            {...register("code", { required: true })}
          />
        </TextField>
      </div>

      <div className={styles.footer}>
        {onClose && (
          <Button
            type="button"
            className={styles.cancel}
            onPress={() => {
              reset();
              onClose();
            }}
          >
            Cancel
          </Button>

        )}
        <Button type="submit" className={styles.submit}>
          Create snippet
        </Button>
      </div>
    </form>
  )
}
