import { PlusCircle } from "lucide-react";
import { AddButton } from "@/components/Buttons/AddButton";

export default function EmptyMenu() {
  return (
    <div className="flex flex-col bg-menu-el-bg w-4/5 items-center p-4 gap-4">
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
