import { useForm, SubmitHandler } from "react-hook-form";
import { FormButton } from "@components/Buttons/FormButton";
import { Search, Trash2 } from "lucide-react";
import { InputWithLabel } from "@components/inputs/InputWithLabel";

type NavigationElement = {
  label: string;
  url?: string;
};

/**
 * AddNavigationElement component renders a form for adding a new navigation element.
 * It uses `react-hook-form` for form handling and validation.
 *
 * @component
 * @example
 * return (
 *   <AddNavigationElement
 *     onSubmit={(data, parentId) => console.log(data, parentId)}
 *     onCancel={() => console.log("Cancel clicked")}
 *     parentId="123"
 *   />
 * )
 *
 * @param {Object} props - The props for the AddNavigationElement component.
 * @param {(data: NavigationElement, parentId?: string) => void} props.onSubmit - The function to call when the form is submitted.
 * @param {() => void} [props.onCancel] - The function to call when the cancel button is clicked.
 * @param {string} [props.parentId] - The ID of the parent navigation element (if any).
 * @returns {JSX.Element} A React component that displays a form for adding a new navigation element.
 */

export const AddNavigationElement = ({
  onSubmit,
  onCancel,
  parentId,
}: {
  onSubmit: (data: NavigationElement, parentId?: string) => void;
  onCancel?: () => void;
  parentId?: string;
}) => {
  const { register, handleSubmit, formState, reset } =
    useForm<NavigationElement>();
  const { errors } = formState;

  const submitHandler: SubmitHandler<NavigationElement> = (data) => {
    onSubmit(data, parentId);
    reset();
  };

  return (
    <div className="flex border border-border-primary bg-bg-primary rounded-custom-rounded gap-8 p-8 w-full">
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <div className="flex flex-col gap-3">
          <InputWithLabel
            type="text"
            placeholder="e.g., Promotions"
            label="Nazwa"
            inputId="name-input"
            optional={false}
            {...register("label", { required: "Name is required" })}
          />
          {errors.label && (
            <span className="text-red-500">{errors.label.message}</span>
          )}

          <InputWithLabel
            startIcon={Search}
            type="text"
            placeholder="Paste or search"
            label="Link"
            inputId="url-input"
            optional={true}
            {...register("url")}
          />

          <div className="flex space-x-2">
            <FormButton
              isSubmit={false}
              label="Cancel"
              onClick={() => {
                reset();
                onCancel && onCancel();
              }}
            />
            <FormButton isSubmit={true} label="Add" />
          </div>
        </div>
      </form>
      <Trash2 className="text-foreground" />
    </div>
  );
};
