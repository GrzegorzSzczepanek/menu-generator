import { Move } from "lucide-react";
import React from "react";
import { OptionButtonGrid } from "../Buttons/OptionButtonGrid";

interface MenuItemProps {
  name: string;
  url: string;
  borderRadiusType?: "none" | "upper" | "bottom-left";
}

/**
 * MenuItem component renders a menu item with a name, URL, and optional border radius styles.
 * The border radius can be customized to be none, only upper corners, or only bottom left corner.
 *
 * @component
 * @example
 * return (
 *   <MenuItem name="Promocje" url="http://localhost:3000/" borderRadiusType="upper" />
 * )
 *
 * @param {MenuItemProps} props - The props for the MenuItem component.
 * @param {string} props.name - The name of the menu item.
 * @param {string} props.url - The URL of the menu item.
 * @param {"none" | "upper" | "bottom-left"} [props.borderRadiusType="none"] - The type of border radius to apply.
 * @returns {JSX.Element} A React component that displays a menu item.
 */

export const MenuItem: React.FC<MenuItemProps> = ({
  name = "Promocje",
  url = "http://localhost:3000/",
  borderRadiusType = "none",
}) => {
  const getBorderRadiusClass = () => {
    switch (borderRadiusType) {
      case "upper":
        return "rounded-t-custom-rounded";
      case "bottom-left":
        return "rounded-bl-custom-rounded";
      default:
        return "rounded-none";
    }
  };

  return (
    <div
      className={`flex bg-slate-400 w-11/12 items-center justify-between p-3 ${getBorderRadiusClass()}`}
    >
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
