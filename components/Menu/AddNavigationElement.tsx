import { useForm, SubmitHandler } from "react-hook-form";
import { FormButton } from "../Buttons/FormButton";
import { Search, Trash, Trash2 } from "lucide-react";
import { InputWithLabel } from "../inputs/InputWithLabel";

type NavigationElement = {
  label: string;
  url?: string;
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

  const submitHandler: SubmitHandler<NavigationElement> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="flex border border-border p- rounded-custom-rounded gap-8 p-8 w-11/12">
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <div className="flex flex-col gap-3">
          <InputWithLabel
            type="text"
            placeholder="np. Promocje"
            label="Nazwa"
            inputId="name-input"
            optional={false}
            {...register("label", { required: "Nazwa jest wymagana" })}
          />
          {errors.label && <span>{errors.label.message}</span>}

          <InputWithLabel
            startIcon={Search}
            type="text"
            placeholder="Wklej, lub wyszukaj"
            label="Link"
            inputId="url-input"
            optional={true}
            {...register("url")}
          />

          <div className="flex space-x-2">
            <FormButton
              isSubmit={false}
              label="Anuluj"
              onClick={() => {
                reset();
              }}
            />
            <FormButton isSubmit={true} label="Dodaj" />
          </div>
        </div>
      </form>
      <Trash2 className="text-foreground" />
    </div>
  );
};
