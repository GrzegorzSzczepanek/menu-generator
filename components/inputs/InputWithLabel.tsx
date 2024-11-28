import { combineClassNames } from "@/lib/utils/combineClassNames";
import { LucideIcon } from "lucide-react";
import React from "react";
import { Input } from "@components/inputs/Input";

export interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  label?: string;
  placeholder?: string;
  inputId?: string;
}

/**
 * `InputWithLabel` is a React component that renders an input field with an associated label.
 * It supports optional start and end icons, as well as a placeholder.
 *
 * @component
 * @param {InputWithLabelProps} props - The properties for the input component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.type] - The type of the input element.
 * @param {React.ElementType} [props.startIcon] - An optional icon to display at the start of the input.
 * @param {React.ElementType} [props.endIcon] - An optional icon to display at the end of the input.
 * @param {string} [props.label] - The label text associated with the input.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {string} [props.inputId] - The id attribute for the input element.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to be forwarded to the input element.
 * @returns {JSX.Element} The rendered input with label component.
 *
 * @example
 * ```tsx
 * import { InputWithLabel } from './components/inputs/InputWithLabel';
 * import { SearchIcon } from 'lucide-react';
 *
 * function App() {
 *   return (
 *     <InputWithLabel
 *       label="Search"
 *       placeholder="Type to search..."
 *       startIcon={SearchIcon}
 *       inputId="search-input"
 *     />
 *   );
 * }
 * ```
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
      ...props
    },
    ref
  ) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;
    const Label = label;
    const Placeholder = placeholder;
    const InputId = inputId;

    return (
      <div>
        {Label && (
          <label htmlFor={InputId ? InputId : undefined}>{Label}</label>
        )}
        <Input
          id={InputId ? InputId : undefined}
          startIcon={StartIcon}
          endIcon={EndIcon}
          placeholder={Placeholder}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);
InputWithLabel.displayName = "InputWithLabel";

export { InputWithLabel };
