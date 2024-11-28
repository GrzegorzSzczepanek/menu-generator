import React from "react";
import { FormButton } from "./FormButton";
import { AddButton } from "./AddButton";

export const OptionButtonGrid = () => {
  return (
    <div className="flex">
      <FormButton
        label="Left"
        isSubmit={false}
        onClick={() => {
          alert("xd");
        }}
        borderRadiusType="left"
      />
      <FormButton
        label="Middle"
        isSubmit={false}
        onClick={() => {
          alert("xd");
        }}
        borderRadiusType="middle"
      />
      <FormButton
        label="Right"
        isSubmit={false}
        onClick={() => {
          alert("xd");
        }}
        borderRadiusType="right"
      />
    </div>
  );
};
