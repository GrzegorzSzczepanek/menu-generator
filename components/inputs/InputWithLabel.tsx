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
