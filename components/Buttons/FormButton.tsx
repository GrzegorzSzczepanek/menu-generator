import React from "react";

interface FormButtonProps {
  label: string;
  isSubmit: boolean;
  onClick?: () => void;
  borderRadiusType?: "left" | "middle" | "right" | "default";
}

/**
 * FormButton component renders a button that can be either a submit or cancel button
 * based on the isSubmit prop. It also applies different border radius styles based on the borderRadiusType prop.
 *
 * @component
 * @example
 * return (
 *   <FormButton label="Submit" isSubmit={true} onClick={handleSubmit} borderRadiusType="left" />
 * )
 *
 * @param {FormButtonProps} props - The props for the FormButton component.
 * @param {string} props.label - The label for the button.
 * @param {boolean} props.isSubmit - Determines if the button is a submit button.
 * @param {() => void} [props.onClick] - The function to call when the button is clicked.
 * @param {"left" | "middle" | "right" | "default"} [props.borderRadiusType="default"] - The type of border radius to apply.
 * @returns {JSX.Element} A React component that displays a button.
 */

export const FormButton: React.FC<FormButtonProps> = ({
  label,
  isSubmit,
  onClick,
  borderRadiusType = "default",
}) => {
  const getBorderClasses = () => {
    const baseClasses = isSubmit
      ? "border border-purple-500"
      : "border border-gray-300";

    switch (borderRadiusType) {
      case "left":
        return `rounded-l-custom-rounded ${baseClasses}`;
      case "middle":
        return `rounded-none ${baseClasses} -ml-px`;
      case "right":
        return `rounded-r-custom-rounded ${baseClasses} -ml-px`;
      default:
        return `rounded-custom-rounded ${baseClasses}`;
    }
  };

  const buttonClass = isSubmit
    ? `px-3 py-1 border-2 text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${getBorderClasses()} font-bold`
    : `px-3 py-1 border-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 ${getBorderClasses()} font-bold`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {label}
    </button>
  );
};
