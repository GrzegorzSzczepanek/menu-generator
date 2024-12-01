import React from "react";
import { MenuItemType } from "@/types/menu";
import { useSortable, UseSortableArguments } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MenuItem } from "./MenuItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface TreeItemProps {
  item: MenuItemType;
  dispatch: React.Dispatch<any>;
  depth?: number;
}

export const TreeItem: React.FC<TreeItemProps> = ({
  item,
  dispatch,
  depth = 0,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
      data: {
        ...item,
        depth,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    paddingLeft: `${depth * 20}px`, // Indentation for child items
  };

  return (
    <div ref={setNodeRef} style={style}>
      <MenuItem
        item={item}
        dispatch={dispatch}
        attributes={attributes}
        listeners={listeners}
      />
      {item.children && item.children.length > 0 && (
        <SortableContext
          items={item.children.map((child) => child.id)}
          strategy={verticalListSortingStrategy}
        >
          {item.children.map((child) => (
            <TreeItem
              key={child.id}
              item={child}
              dispatch={dispatch}
              depth={depth + 1}
            />
          ))}
        </SortableContext>
      )}
    </div>
  );
};
