"use client";

import React, { useEffect, useReducer, useState } from "react";
import { Menu } from "@components/Menu/Menu";
import { AddNavigationElement } from "@components/Menu/AddNavigationElement";
import EmptyMenu from "@components/Menu/EmptyMenu";
import { MenuItemType } from "@/types/menu";
import { AddButton } from "@/components/Buttons/AddButton";

interface State {
  menuData: MenuItemType[];
}

type Action =
  | { type: "SET_MENU"; payload: MenuItemType[] }
  | { type: "ADD_ITEM"; payload: MenuItemType }
  | { type: "ADD_CHILD"; payload: { parentId: string; child: MenuItemType } }
  | {
      type: "UPDATE_ITEM";
      payload: { id: string; data: Partial<MenuItemType> };
    }
  | { type: "DELETE_ITEM"; payload: { id: string } }
  | { type: "REORDER_ITEMS"; payload: MenuItemType[] };

const initialState: State = {
  menuData: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, menuData: action.payload };
    case "ADD_ITEM":
      return { ...state, menuData: [...state.menuData, action.payload] };
    case "ADD_CHILD":
      const addChild = (items: MenuItemType[]): MenuItemType[] => {
        return items.map((item) => {
          if (item.id === action.payload.parentId) {
            return {
              ...item,
              children: [...(item.children || []), action.payload.child],
            };
          } else if (item.children) {
            return { ...item, children: addChild(item.children) };
          } else {
            return item;
          }
        });
      };
      return { ...state, menuData: addChild(state.menuData) };
    case "UPDATE_ITEM":
      const updateItem = (items: MenuItemType[]): MenuItemType[] => {
        return items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload.data };
          } else if (item.children) {
            return { ...item, children: updateItem(item.children) };
          } else {
            return item;
          }
        });
      };
      return { ...state, menuData: updateItem(state.menuData) };
    case "DELETE_ITEM":
      const deleteItem = (items: MenuItemType[]): MenuItemType[] => {
        return items
          .filter((item) => item.id !== action.payload.id)
          .map((item) => {
            if (item.children) {
              return { ...item, children: deleteItem(item.children) };
            } else {
              return item;
            }
          });
      };
      return { ...state, menuData: deleteItem(state.menuData) };
    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showAddForm, setShowAddForm] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedMenu = localStorage.getItem("menuData");
    if (savedMenu) {
      dispatch({ type: "SET_MENU", payload: JSON.parse(savedMenu) });
    }
  }, []);

  // Save to localStorage when menuData changes
  useEffect(() => {
    localStorage.setItem("menuData", JSON.stringify(state.menuData));
  }, [state.menuData]);

  const handleAddItem = (data: any) => {
    const newItem: MenuItemType = {
      id: Date.now().toString(),
      label: data.label,
      url: data.url,
      children: [],
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setShowAddForm(false);
  };

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {state.menuData.length === 0 ? (
        <EmptyMenu onAdd={() => setShowAddForm(true)} />
      ) : (
        <>
          <Menu menuData={state.menuData} dispatch={dispatch} />
          <AddButton
            label="Add Menu Item"
            onClick={() => setShowAddForm(true)}
            styleType="primary"
          />
        </>
      )}
      {showAddForm && (
        <AddNavigationElement
          onSubmit={handleAddItem}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}
