import React from "react";
import { LucideIcon } from "lucide-react";
import { Input } from "@components/inputs/Input";

export interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  label?: string;
  placeholder?: string;
  inputId?: string;
  optional?: boolean;
}
/**
 * InputWithLabel component renders an input field with an associated label.
 * It supports optional start and end icons, as well as a placeholder.
 *
 * @component
 * @example
 * return (
 *   <InputWithLabel
 *     label="Search"
 *     placeholder="Type to search..."
 *     startIcon={SearchIcon}
 *     inputId="search-input"
 *   />
 * )
 *
 * @param {InputWithLabelProps} props - The props for the InputWithLabel component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.type] - The type of the input element.
 * @param {React.ElementType} [props.startIcon] - An optional icon to display at the start of the input.
 * @param {React.ElementType} [props.endIcon] - An optional icon to display at the end of the input.
 * @param {string} [props.label] - The label text associated with the input.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {string} [props.inputId] - The id attribute for the input element.
 * @param {boolean} [props.optional=true] - Whether the input is optional.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to be forwarded to the input element.
 * @returns {JSX.Element} The rendered input with label component.
 */
const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      className,
      type,
      startIcon,
      endIcon,
      label,
      placeholder,
      inputId,
      optional = true,
      ...props
    },
    ref
  ) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block mb-1 font-medium">
            {label} {!optional && <span className="text-red-500">*</span>}
          </label>
        )}
        <Input
          id={inputId}
          startIcon={StartIcon}
          endIcon={EndIcon}
          placeholder={placeholder}
          {...props}
          ref={ref}
          optional={optional}
        />
      </div>
    );
  }
);
InputWithLabel.displayName = "InputWithLabel";

export { InputWithLabel };
