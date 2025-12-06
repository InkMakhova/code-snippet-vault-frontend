import { useForm } from "react-hook-form";

import styles from './SearchForm.module.css';
import { Input } from "../../components/Input/Input.tsx";
import { Button } from "../../components/Button/Button.tsx";
import type { SearchFormValues } from "../../types/types.ts";

type Props = {
  onSearch: (query: string) => void;
}

export function SearchForm({ onSearch }: Props) {
  const { register, handleSubmit } = useForm<SearchFormValues>({
    defaultValues: { query: "" },
  });

  const submitHandler = (values: SearchFormValues) => {
    onSearch(values.query.trim());
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.container}>
        <Input
          {...register("query")}
          placeholder="search by language (e.g. JavaScript)"
          aria-label="search by language"
        />
        <Button type="submit">Apply</Button>
      </div>
    </form>
  )
}
