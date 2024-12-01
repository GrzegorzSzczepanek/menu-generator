import { PlusCircle } from "lucide-react";
import { AddButton } from "@components/Buttons/AddButton";

export default function EmptyMenu({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col bg-menu-el-bg w-full items-center p-4 gap-4 rounded-custom-rounded">
      <h1 className="text-xl font-semibold">Menu is Empty</h1>
      <h2 className="text-gray-500">There are no links in this menu yet.</h2>
      <AddButton
        label="Add Menu Item"
        onClick={onAdd}
        styleType="primary"
        icon={<PlusCircle />}
      />
    </div>
  );
}
