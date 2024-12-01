import { useForm, SubmitHandler } from "react-hook-form";
import { FormButton } from "../Buttons/FormButton";
import { InputWithLabel } from "../inputs/InputWithLabel";
import { MenuItemType } from "@/types/menu";

type FormValues = {
  label: string;
  url?: string;
};

/**
 * EditNavigationElement component renders a form for editing an existing navigation element.
 * It uses `react-hook-form` for form handling and validation.
 *
 * @component
 * @example
 * return (
 *   <EditNavigationElement
 *     item={item}
 *     onSubmit={(data) => console.log(data)}
 *     onCancel={() => console.log("Cancel clicked")}
 *   />
 * )
 *
 * @param {EditNavigationElementProps} props - The props for the EditNavigationElement component.
 * @param {MenuItemType} props.item - The menu item data to be edited.
 * @param {(data: NavigationElement) => void} props.onSubmit - The function to call when the form is submitted.
 * @param {() => void} props.onCancel - The function to call when the cancel button is clicked.
 * @returns {JSX.Element} A React component that displays a form for editing an existing navigation element.
 */

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
          label="Link"
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
