import React from "react";

interface FormButtonProps {
  label: string;
  isSubmit: boolean;
  onClick?: () => void;
  borderRadiusType?: "left" | "middle" | "right" | "default";
}

export const FormButton: React.FC<FormButtonProps> = ({
  label,
  isSubmit,
  onClick,
  borderRadiusType = "default",
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
    <button
      className={buttonClass}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {label}
    </button>
  );
};
