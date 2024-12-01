export interface MenuItemType {
  id: string;
  label: string;
  url?: string;
  parentId?: string | null;
  children?: MenuItemType[];
}

export const flattenTree = (
  items: MenuItemType[],
  parentId: string | null = null
): MenuItemType[] => {
  return items.reduce<MenuItemType[]>((acc, item) => {
    acc.push({ ...item, parentId });
    if (item.children && item.children.length > 0) {
      acc.push(...flattenTree(item.children, item.id));
    }
    return acc;
  }, []);
};

export const buildTree = (flattenedItems: MenuItemType[]): MenuItemType[] => {
  const itemsById: { [key: string]: MenuItemType } = {};
  const rootItems: MenuItemType[] = [];

  flattenedItems.forEach((item) => {
    itemsById[item.id] = { ...item, children: [] };
  });

  flattenedItems.forEach((item) => {
    if (item.parentId) {
      const parent = itemsById[item.parentId];
      if (parent) {
        parent.children!.push(itemsById[item.id]);
      }
    } else {
      rootItems.push(itemsById[item.id]);
    }
  });

  return rootItems;
};
