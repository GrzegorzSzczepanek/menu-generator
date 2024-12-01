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
        {menuData.map((item) => (
          <TreeItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </SortableContext>
      <DragOverlay>{/* Optional: Custom drag overlay */}</DragOverlay>
    </DndContext>
  );
};
