import React from "react";
import { LucideIcon } from "lucide-react";
import { combineClassNames } from "@/lib/utils/combineClassNames";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  inputId?: string;
  optional?: boolean;
}

/**
 * Input component renders an input field with optional start and end icons.
 * It supports additional props for customization.
 *
 * @component
 * @example
 * return (
 *   <Input
 *     type="text"
 *     placeholder="Enter text"
 *     startIcon={SearchIcon}
 *     inputId="input-id"
 *   />
 * )
 *
 * @param {InputProps} props - The props for the Input component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.type] - The type of the input element.
 * @param {React.ElementType} [props.startIcon] - An optional icon to display at the start of the input.
 * @param {React.ElementType} [props.endIcon] - An optional icon to display at the end of the input.
 * @param {string} [props.inputId] - The id attribute for the input element.
 * @param {boolean} [props.optional=true] - Whether the input is optional.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to be forwarded to the input element.
 * @returns {JSX.Element} The rendered input component.
 */

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startIcon, endIcon, inputId, optional = true, ...props },
    ref
  ) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <StartIcon size={18} className="text-muted-foreground" />
          </div>
        )}
        <input
          type={type}
          className={combineClassNames(
            "flex h-10 w-full rounded-custom-rounded border border-input bg-background py-2 px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
            startIcon ? "pl-10" : "",
            endIcon ? "pr-10" : "",
            className ?? ""
          )}
          ref={ref}
          {...props}
          id={inputId}
        />
        {EndIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <EndIcon className="text-muted-foreground" size={18} />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
