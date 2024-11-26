/*
TODO
Formularz tworzenia nawigacji:
a. Umożliwia dodanie nowego elementu nawigacji z polami:
i. Nazwa (label) - wymagane.
ii. URL (url) - opcjonalne.
iii. Możliwość dodania pod-elementów (rekursywnie).
b. Walidacja pól (np. wymaganie wypełnienia pola label).
*/

import { useForm } from "react-hook-form";
import { FormButton } from "./Buttons/FormButton";

type NavigationElement = {
  label: string;
  url?: string;
  children?: NavigationElement[];
};

export const AddNavigationElement = ({
  onSubmit,
}: {
  onSubmit: (data: NavigationElement) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NavigationElement>();

  const submitHandler = (data: NavigationElement) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="label">Label</label>
        <input
          id="label"
          {...register("label", { required: "Label is required" })}
        />
        {errors.label && <span>{errors.label.message}</span>}
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input id="url" {...register("url")} />
      </div>
      <div className="flex space-x-2">
        <FormButton
          isSubmit={false}
          label="Anuluj"
          onClick={() => {
            alert("xd");
          }}
        />
        <FormButton
          isSubmit={true}
          label="Dodaj"
          onClick={() => {
            alert("xd2");
          }}
        />
      </div>
    </form>
  );
};
