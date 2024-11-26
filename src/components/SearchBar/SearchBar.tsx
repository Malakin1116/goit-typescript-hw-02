import { Formik, Form, Field } from "formik";
import { toast, Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header className={css.header}>
      <Toaster position="top-center" />
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.search.trim() === "") {
            toast.error("Please enter text to search for images.");
            setSubmitting(false);
            return;
          }
          onSearch(values.search);
          setSubmitting(false);
          toast.success("Form submitted successfully!");
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Field
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
}
