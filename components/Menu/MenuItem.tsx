"use client";

import React, { useState } from "react";
import { MenuItemType } from "@/types/menu";
import { Move } from "lucide-react";
import { OptionButtonGrid } from "@components/Buttons/OptionButtonGrid";
import { AddNavigationElement } from "./AddNavigationElement";
import { EditNavigationElement } from "./EditNavigationElement";

interface MenuItemProps {
  item: MenuItemType;
  dispatch: React.Dispatch<any>;
  attributes: any;
  listeners: any;
  borderRadiusPrefix:
    | "first"
    | "last"
    | "nested"
    | "nested-first"
    | "nested-last"
    | "only"
    | "first-with-children"
    | "default"
    | "nested-only";
}

/**
 * MenuItem component renders a menu item with options to add a child or edit the item.
 * The additional containers for adding or editing are displayed at the bottom.
 *
 * @component
 * @example
 * return (
 *   <MenuItem
 *     item={item}
 *     dispatch={dispatch}
 *     attributes={attributes}
 *     listeners={listeners}
 *     borderRadiusPrefix="first"
 *   />
 * )
 *
 * @param {MenuItemProps} props - The props for the MenuItem component.
 * @param {MenuItemType} props.item - The menu item data.
 * @param {React.Dispatch<any>} props.dispatch - The dispatch function for state management.
 * @param {any} props.attributes - The attributes for drag-and-drop functionality.
 * @param {any} props.listeners - The listeners for drag-and-drop functionality.
 * @param {"first" | "last" | "nested" | "nested-last" | "default"} props.borderRadiusPrefix - The borderRadiusPrefix of the menu item.
 * @returns {JSX.Element} A React component that displays a menu item.
 */

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  dispatch,
  attributes,
  listeners,
  borderRadiusPrefix = "default",
}) => {
  const [isAddingChild, setIsAddingChild] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddChild = (data: any, parentId?: string) => {
    const newChild: MenuItemType = {
      id: Date.now().toString(),
      label: data.label,
      url: data.url,
      children: [],
    };
    dispatch({
      type: "ADD_CHILD",
      payload: { parentId: item.id, child: newChild },
    });
    setIsAddingChild(false);
  };

  const handleUpdateItem = (data: any) => {
    dispatch({ type: "UPDATE_ITEM", payload: { id: item.id, data } });
    setIsEditing(false);
  };

  const handleDeleteItem = () => {
    dispatch({ type: "DELETE_ITEM", payload: { id: item.id } });
  };

  const getBorderRadiusClass = () => {
    switch (borderRadiusPrefix) {
      case "first":
        return "rounded-t-lg rounded-b-none";
      case "first-with-children":
        return "rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-none";
      case "last":
        return "rounded-none border-b";
      case "only":
        return "rounded-lg";
      case "default":
        return "rounded-none";
      case "nested":
        return "rounded-none";
      case "nested-first":
        return "rounded-none";
      case "nested-last":
        return "rounded-bl-lg";
      case "nested-only":
        return "rounded-bl-lg";
      default:
        return "rounded-none";
    }
  };

  return (
    <>
      <div
        className={`flex flex-col bg-white border ${getBorderRadiusClass()} `}
      >
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <div
              {...attributes}
              {...listeners}
              className="cursor-move text-button-tertiary-fg"
            >
              <Move />
            </div>
            <div>
              <h3 className="font-medium">{item.label}</h3>
              <a className="text-sm text-gray-500" href={item.url}>
                {item.url}
              </a>
            </div>
          </div>
          <OptionButtonGrid
            onEdit={() => setIsEditing(true)}
            onAddSubItem={() => setIsAddingChild(true)}
            onDelete={handleDeleteItem}
          />
        </div>
      </div>
      {isAddingChild && (
        <div className="mt-2 p-3">
          <AddNavigationElement
            onSubmit={handleAddChild}
            onCancel={() => setIsAddingChild(false)}
            parentId={item.id}
          />
        </div>
      )}
      {isEditing && (
        <div className="mt-2 p-3">
          <EditNavigationElement
            item={item}
            onSubmit={handleUpdateItem}
            onCancel={() => setIsEditing(false)}
          />
        </div>
      )}
    </>
  );
};
