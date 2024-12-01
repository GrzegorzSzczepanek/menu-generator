import React from "react";
import { FormButton } from "./FormButton";

interface OptionButtonGridProps {
  onEdit: () => void;
  onAddSubItem: () => void;
  onDelete: () => void;
}

export const OptionButtonGrid: React.FC<OptionButtonGridProps> = ({
  onEdit,
  onAddSubItem,
  onDelete,
}) => {
  return (
    <div className="flex">
      <FormButton
        label="Edit"
        isSubmit={false}
        onClick={onEdit}
        borderRadiusType="left"
      />
      <FormButton
        label="Add Sub-Item"
        isSubmit={false}
        onClick={onAddSubItem}
        borderRadiusType="middle"
      />
      <FormButton
        label="Delete"
        isSubmit={false}
        onClick={onDelete}
        borderRadiusType="right"
      />
    </div>
  );
};
