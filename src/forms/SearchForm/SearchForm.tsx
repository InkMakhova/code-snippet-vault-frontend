import { useForm } from "react-hook-form";

import styles from './SearchForm.module.css';
import { Input } from "../../components/Input/Input.tsx";
import { Button } from "../../components/Button/Button.tsx";
import type { SearchFormValues } from "../../types/types.ts";

type Props = {
  onSearch: (query: string) => void;
  isDisabled?: boolean;
}

export function SearchForm({ onSearch, isDisabled }: Props) {
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
          disabled={isDisabled}
        />
        <Button type="submit" isDisabled={isDisabled}>Apply</Button>
      </div>
    </form>
  )
}
