import React from "react";

interface FormButtonProps {
  label: string;
  isSubmit: boolean; // false if it's going to be a cancel button
  onClick?: () => void;
  borderRadiusType?: "left" | "middle" | "right" | "default"; // New prop to determine border radius type
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
 * @returns {JSX.Element} A React component that displays a button.
 */
export const FormButton: React.FC<FormButtonProps> = ({
  label,
  isSubmit,
  onClick,
  borderRadiusType = "default", // Default to "default" if not provided
}) => {
  const getBorderRadiusClass = () => {
    switch (borderRadiusType) {
      case "left":
        return "rounded-l-custom-rounded";
      case "middle":
        return "rounded-none";
      case "right":
        return "rounded-r-custom-rounded";
      default:
        return "rounded-custom-rounded";
    }
  };

  const buttonClass = isSubmit
    ? `px-4 py-2 border border-purple-500 text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${getBorderRadiusClass()}`
    : `px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 ${getBorderRadiusClass()}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};
