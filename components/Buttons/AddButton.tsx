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
}) => {
  return (
    <button
      className="bg-purple-600 flex items-center p-3 rounded-custom-rounded text-white font-semibold justify-center"
      onClick={onClick}
    >
      {icon && <span className="">{icon}</span>}
      <span className="">{label}</span>
    </button>
  );
};

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  styleType: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

AddButton.defaultProps = {
  icon: null,
  styleType: "primary",
};
