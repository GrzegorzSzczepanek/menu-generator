import { PlusCircle } from "lucide-react";
import { AddButton } from "@/components/Buttons/AddButton";

/**
 * EmptyMenu component renders a message indicating that the menu is empty
 * and provides a button to add a new menu item.
 *
 * @component
 * @example
 * return (
 *   <EmptyMenu />
 * )
 *
 * @returns {TSX.Element} A React component that displays an empty menu message and an add button.
 */

export default function EmptyMenu() {
  return (
    <div className="flex flex-col bg-menu-el-bg w-4/5 items-center p-4 gap-4 rounded-custom-rounded">
      <h1>Menu jest puste</h1>
      <h2 style={{ fontSize: "1rem", color: "gray" }}>
        W tym menu nie ma jeszcze zadnych linków
      </h2>
      <AddButton
        label="Dodaj pozycję menu"
        onClick={() => alert("Button Clicked")}
        styleType="primary"
        icon={<PlusCircle />}
      />
    </div>
  );
}
