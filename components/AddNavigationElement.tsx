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
import { Input } from "./inputs/Input";
import { Search } from "lucide-react";
import { InputWithLabel } from "./inputs/InputWithLabel";
import { OptionButtonGrid } from "./Buttons/OptionButtonGrid";

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
        <InputWithLabel
          type="Text"
          placeholder="np. Promocje"
          label="Nazwa"
          inputId="name-input"
        />

        <InputWithLabel
          startIcon={Search}
          type="Text"
          placeholder="Wklej, lub wyszukaj"
          label="Link"
          inputId="url-input"
        />

        <FormButton
          isSubmit={false}
          label="Anuluj"
          onClick={() => {
            alert("xd1");
          }}
        />
        <FormButton
          isSubmit={true}
          label="Dodaj"
          onClick={() => {
            alert("xd2");
          }}
        />
        <OptionButtonGrid />
      </div>
    </form>
  );
};
