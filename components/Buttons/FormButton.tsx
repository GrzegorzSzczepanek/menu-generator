import React from "react";

interface FormButtonProps {
  label: string;
  isSubmit: boolean; // false if it's goint to be cancel button
  onClick: () => void;
}

function getButton(isSubmit: boolean, label: string): JSX.Element {
  if (isSubmit) {
    return (
      <button className="px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500">
        {label}
      </button>
    );
  }
  return (
    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
      {label}
    </button>
  );
}

export const FormButton: React.FC<FormButtonProps> = ({
  label,
  isSubmit,
  onClick,
}) => {
  return getButton((isSubmit = isSubmit), (label = label));
};
