"use client";

import React from "react";
import PropTypes from "prop-types";

interface AddButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  styleType?: "primary" | "secondary" | "danger";
}

/**
 * AddButton component renders a button with an optional icon and different styles.
 * It supports primary, secondary, and danger styles.
 *
 * @component
 * @example
 * return (
 *   <AddButton
 *     label="Add Item"
 *     onClick={() => console.log("Add button clicked")}
 *     icon={<PlusIcon />}
 *     styleType="primary"
 *   />
 * )
 *
 * @param {AddButtonProps} props - The props for the AddButton component.
 * @param {string} props.label - The label for the button.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {React.ReactNode} [props.icon] - An optional icon to display in the button.
 * @param {"primary" | "secondary" | "danger"} [props.styleType] - The style type of the button.
 * @returns {JSX.Element} A React component that displays a button with an optional icon and different styles.
 */

export const AddButton: React.FC<AddButtonProps> = ({
  label,
  onClick,
  icon,
  styleType,
}) => {
  return (
    <button
      className={`flex items-center p-2 rounded-custom-rounded font-semibold justify-center ${
        styleType === "secondary"
          ? "bg-button-secondary-bg text-text-tertiary"
          : styleType === "danger"
          ? "bg-button-danger-bg text-text-danger"
          : "bg-button-primary-bg text-white"
      }`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  styleType: PropTypes.oneOf(["primary", "secondary", "danger"]),
};
