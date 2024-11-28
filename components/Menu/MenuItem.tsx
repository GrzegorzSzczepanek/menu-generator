import { Move } from "lucide-react";
import React from "react";
import { OptionButtonGrid } from "../Buttons/OptionButtonGrid";

interface MenuItemProps {
  name: string;
  url: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  name = "Promocje",
  url = "http://localhost:3000/",
}) => {
  return (
    <div className="flex bg-slate-400 w-11/12 items-center justify-between p-3 rounded-custom-rounded">
      <div className="flex items-center gap-2 px-5">
        <Move />
        <div>
          <h3>{name}</h3>
          <p>{url}</p>
        </div>
      </div>
      <OptionButtonGrid />
    </div>
  );
};
