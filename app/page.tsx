"use client";

import EmptyMenu from "@/components/Menu/EmptyMenu";
import { AddNavigationElement } from "@/components/Menu/AddNavigationElement";
import { useState } from "react";
import { MenuItem } from "@/components/Menu/MenuItem";

export default function Home() {
  const [label, setLabel] = useState<String>("");
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <EmptyMenu />
      <MenuItem
        name="Promocja"
        url="http://localhost:3000"
        borderRadiusType="upper"
      />
      <AddNavigationElement
        onSubmit={function (data: {
          label: string;
          url?: string;
          // children?: NavigationElement[];
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
