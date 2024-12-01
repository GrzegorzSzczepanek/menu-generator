import { useForm, SubmitHandler } from "react-hook-form";
import { FormButton } from "../Buttons/FormButton";
import { InputWithLabel } from "../inputs/InputWithLabel";
import { MenuItemType } from "@/types/menu";

type FormValues = {
  label: string;
  url?: string;
};

export const EditNavigationElement = ({
  item,
  onSubmit,
  onCancel,
}: {
  item: MenuItemType;
  onSubmit: (data: FormValues) => void;
  onCancel: () => void;
}) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      label: item.label,
      url: item.url,
    },
  });
  const { errors } = formState;

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="flex flex-col border border-border rounded-custom-rounded gap-4 p-4 w-full">
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <InputWithLabel
          type="text"
          placeholder="e.g., Promotions"
          label="Name"
          inputId="name-input"
          optional={false}
          {...register("label", { required: "Name is required" })}
        />
        {errors.label && (
          <span className="text-red-500">{errors.label.message}</span>
        )}

        <InputWithLabel
          type="text"
          placeholder="Paste or search"
          label="URL"
          inputId="url-input"
          optional={true}
          {...register("url")}
        />

        <div className="flex space-x-2 mt-4">
          <FormButton isSubmit={false} label="Cancel" onClick={onCancel} />
          <FormButton isSubmit={true} label="Save" />
        </div>
      </form>
    </div>
  );
};
