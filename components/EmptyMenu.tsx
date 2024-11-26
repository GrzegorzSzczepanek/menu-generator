import { LuPlusCircle } from "react-icons/lu";
import { AddButton } from "@/components/Buttons/AddButton";

export default function EmptyMenu() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[white]">Menu jest puste</h1>
      <h2 style={{ fontSize: "1rem", color: "gray" }}>
        W tym menu nie ma jeszcze zadnych linków
      </h2>
      <AddButton
        label="Dodaj pozycję menu"
        onClick={() => alert("Button Clicked")}
        styleType="primary"
        icon={<LuPlusCircle />}
      />
    </div>
  );
}
