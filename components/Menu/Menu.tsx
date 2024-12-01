import React from "react";
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
 * @returns {TSX.Element} A React component that displays a custom drag overlay.
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

export const Menu: React.FC<MenuProps> = ({ menuData, dispatch }) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const flattenedItems = flattenTree(menuData);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

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

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
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
      <DragOverlay></DragOverlay>
    </DndContext>
  );
};
