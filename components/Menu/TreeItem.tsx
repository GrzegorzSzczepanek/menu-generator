import React from "react";
import { MenuItemType } from "@/types/menu";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MenuItem } from "./MenuItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface TreeItemProps {
  item: MenuItemType;
  dispatch: React.Dispatch<any>;
  depth: number;
  index: number;
  length: number | undefined;
}

/**
 * TreeItem component renders a sortable tree item with nested children.
 * It uses the `useSortable` hook from `@dnd-kit` to enable drag-and-drop functionality.
 *
 * @component
 * @example
 * return (
 *   <TreeItem
 *     item={item}
 *     dispatch={dispatch}
 *     depth={0}
 *     index={0}
 *     length={menuData.length}
 *   />
 * )
 *
 * @param {TreeItemProps} props - The props for the TreeItem component.
 * @param {MenuItemType} props.item - The menu item data.
 * @param {React.Dispatch<any>} props.dispatch - The dispatch function for state management.
 * @param {number} props.depth - The depth of the tree item (used for indentation).
 * @param {number} props.index - The index of the tree item in its parent list.
 * @param {number | undefined} props.length - The total number of items in the parent list.
 * @returns {JSX.Element} A React component that displays a sortable tree item.
 */

export const TreeItem: React.FC<TreeItemProps> = ({
  item,
  dispatch,
  depth,
  index,
  length = 0,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
      data: {
        ...item,
        depth,
      },
    });

  const calculatePadding = (depth: number) => {
    if (depth === 0) {
      return 0;
    }
    const basePadding = 60;
    // we calculate it that way to aviod padding overlapping from the previous element so we don't get sum of previous ones.
    return `${depth * basePadding - (depth - 1) * basePadding}px`;
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    paddingLeft: calculatePadding(depth),
  };

  const getBorderRadiusPrefix = (
    index: number,
    length: number,
    depth: number,
    item: MenuItemType
  ) => {
    const hasChildren = item.children && item.children.length > 0;

    if (depth === 0) {
      if (hasChildren && index !== 0) return "nested-last";
      if (hasChildren && index === 0) return "first-with-children";
      if (index === length - 1) return "last";
      if (index === 0 && length === 1) return "only";
      if (index === 0) return "first";

      return "default";
    } else {
      if (index === length - 1 && !hasChildren) return "nested-last";
      if (hasChildren) return "nested-last";
      if (index === 0) return "nested-first";
      return "nested";
    }
  };

  const borderRadiusPrefix = getBorderRadiusPrefix(index, length, depth, item);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-bg-secondary rounded-t-custom-rounded w-full"
    >
      <MenuItem
        item={item}
        dispatch={dispatch}
        attributes={attributes}
        listeners={listeners}
        borderRadiusPrefix={borderRadiusPrefix}
      />
      {item.children && item.children.length > 0 && (
        <SortableContext
          items={item.children.map((child) => child.id)}
          strategy={verticalListSortingStrategy}
        >
          {item.children.map((child, idx) => (
            <TreeItem
              key={child.id}
              item={child}
              dispatch={dispatch}
              depth={depth + 1}
              index={idx}
              length={item.children?.length}
            />
          ))}
        </SortableContext>
      )}
    </div>
  );
};
