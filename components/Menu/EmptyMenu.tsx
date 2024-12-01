import { PlusCircle } from "lucide-react";
import { AddButton } from "@components/Buttons/AddButton";

/**
 * EmptyMenu component renders a message indicating that the menu is empty
 * and provides a button to add a new menu item.
 *
 * @component
 * @example
 * return (
 *   <EmptyMenu onAdd={() => console.log("Add button clicked")} />
 * )
 *
 * @param {EmptyMenuProps} props - The props for the EmptyMenu component.
 * @param {() => void} props.onAdd - The function to call when the add button is clicked.
 * @returns {JSX.Element} A React component that displays an empty menu message and an add button.
 */

export default function EmptyMenu({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col bg-bg-secondary border-border-secondary w-full items-center p-4 gap-4 rounded-custom-rounded">
      <h1 className="text-xl font-semibold text-text-primary">
        Menu jest puste
      </h1>
      <h2 className="text-text-tertiary">
        W tym menu nie ma jeszcze zadnych linków.
      </h2>
      <AddButton
        label="Dodaj pozycję menu"
        onClick={onAdd}
        styleType="primary"
        icon={<PlusCircle />}
      />
    </div>
  );
}
