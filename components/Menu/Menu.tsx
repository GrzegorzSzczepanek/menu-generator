import React, { useState } from "react";
import { MenuItemType } from "@/types/menu";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { flattenTree, buildTree } from "@/lib/utils/treeUtils";
import { TreeItem } from "./TreeItem";

interface MenuProps {
  menuData: MenuItemType[];
  dispatch: React.Dispatch<any>;
}

interface CustomDragOverlayProps {
  item: MenuItemType;
}

/**
 * CustomDragOverlay component renders a custom overlay for the item being dragged.
 *
 * @component
 * @example
 * return (
 *   <CustomDragOverlay item={item} />
 * )
 *
 * @param {CustomDragOverlayProps} props - The props for the CustomDragOverlay component.
 * @param {MenuItemType} props.item - The menu item data.
 * @returns {JSX.Element} A React component that displays a custom drag overlay.
 */
export const CustomDragOverlay: React.FC<CustomDragOverlayProps> = ({
  item,
}) => {
  return (
    <div className="p-3 bg-gray-200 border rounded shadow-lg">
      <h3 className="font-medium">{item.label}</h3>
      <p className="text-sm text-gray-500">{item.url}</p>
    </div>
  );
};

/**
 * Menu component renders a sortable menu with drag-and-drop functionality.
 * It uses `@dnd-kit` for drag-and-drop handling and supports nested menu items.
 *
 * @component
 * @example
 * return (
 *   <Menu menuData={menuData} dispatch={dispatch} />
 * )
 *
 * @param {MenuProps} props - The props for the Menu component.
 * @param {MenuItemType[]} props.menuData - The array of menu items.
 * @param {React.Dispatch<any>} props.dispatch - The dispatch function for state management.
 * @returns {JSX.Element} A React component that displays a sortable menu.
 */
export const Menu: React.FC<MenuProps> = ({ menuData, dispatch }) => {
  const sensors = useSensors(useSensor(PointerSensor));
  const [activeId, setActiveId] = useState<string | null>(null);

  const flattenedItems = flattenTree(menuData);

  const handleDragStart = ({ active }: any) => {
    setActiveId(active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      const oldIndex = flattenedItems.findIndex(
        (item) => item.id === active.id
      );
      const newIndex = flattenedItems.findIndex((item) => item.id === over.id);

      const newFlattenedItems = arrayMove(flattenedItems, oldIndex, newIndex);

      const newMenuData = buildTree(newFlattenedItems);

      dispatch({ type: "SET_MENU", payload: newMenuData });
    }
  };

  const activeItem = flattenedItems.find((item) => item.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={flattenedItems.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {menuData.map((item, index) => (
          <TreeItem
            key={item.id}
            item={item}
            dispatch={dispatch}
            depth={0}
            index={index}
            length={menuData.length}
          />
        ))}
      </SortableContext>
      <DragOverlay>
        {activeItem ? (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            <CustomDragOverlay item={activeItem} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
