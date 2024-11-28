import React from "react";
import { FormButton } from "./FormButton";

export const OptionButtonGrid = () => {
  return (
    <div className="flex bg-black">
      <FormButton
        label={""}
        isSubmit={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <FormButton
        label={""}
        isSubmit={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <FormButton
        label={""}
        isSubmit={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};
