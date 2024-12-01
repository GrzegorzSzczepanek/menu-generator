"use client";

import React from "react";
import PropTypes from "prop-types";

interface AddButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  styleType?: "primary" | "secondary" | "danger";
}

export const AddButton: React.FC<AddButtonProps> = ({
  label,
  onClick,
  icon,
  styleType = "primary",
}) => {
  return (
    <button
      className={`bg-purple-600 flex items-center p-3 rounded-custom-rounded text-white font-semibold justify-center ${
        styleType === "secondary" ? "bg-gray-500" : ""
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
