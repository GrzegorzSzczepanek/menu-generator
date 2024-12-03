import React from "react";
import { FormButton } from "@components/Buttons/FormButton";

interface OptionButtonGridProps {
  onEdit: () => void;
  onAddSubItem: () => void;
  onDelete: () => void;
}

/**
 * OptionButtonGrid component renders a grid of buttons for editing, adding, and deleting menu items.
 *
 * @component
 * @example
 * return (
 *   <OptionButtonGrid
 *     onEdit={() => console.log("Edit clicked")}
 *     onAddSubItem={() => console.log("Add Sub Item clicked")}
 *     onDelete={() => console.log("Delete clicked")}
 *   />
 * )
 *
 * @param {OptionButtonGridProps} props - The props for the OptionButtonGrid component.
 * @param {() => void} props.onEdit - The function to call when the edit button is clicked.
 * @param {() => void} props.onAddSubItem - The function to call when the add sub-item button is clicked.
 * @param {() => void} props.onDelete - The function to call when the delete button is clicked.
 * @returns {JSX.Element} A React component that displays a grid of option buttons.
 */

export const OptionButtonGrid: React.FC<OptionButtonGridProps> = ({
  onEdit,
  onAddSubItem,
  onDelete,
}) => {
  return (
    <div className="flex">
      <FormButton
        label="Usuń"
        isSubmit={false}
        onClick={onDelete}
        borderRadiusType="left"
      />
      <FormButton
        label="Edytuj"
        isSubmit={false}
        onClick={onEdit}
        borderRadiusType="middle"
      />
      <FormButton
        label="Dodaj pozycję menu"
        isSubmit={false}
        onClick={onAddSubItem}
        borderRadiusType="right"
      />
    </div>
  );
};
