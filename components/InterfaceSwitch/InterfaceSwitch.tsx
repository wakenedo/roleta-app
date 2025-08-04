"use client";
import React, { ReactNode } from "react";

interface InterfaceSwitchProps {
  rightLabel: string;
  leftLabel: string;
  rightComponent: ReactNode;
  leftComponent: ReactNode;
  activeSide?: "left" | "right"; // renamed from `value`
  onToggleChange?: (side: "left" | "right") => void;
}

const InterfaceSwitch: React.FC<InterfaceSwitchProps> = ({
  rightLabel,
  leftLabel,
  rightComponent,
  leftComponent,
  activeSide = "left",
  onToggleChange,
}) => {
  const handleToggle = (side: "left" | "right") => {
    if (onToggleChange) onToggleChange(side);
  };

  return (
    <>
      <div className="flex bg-slate-900 rounded-xs p-1 h-9 space-x-1 w-full">
        <button
          className={`flex-1 px-4 py-1 rounded-sm text-xs font-bold transition-colors duration-200 uppercase ${
            activeSide === "left"
              ? "bg-slate-200 text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
          onClick={() => handleToggle("left")}
        >
          {leftLabel}
        </button>
        <button
          className={`flex-1 px-4 py-1 rounded-sm text-xs font-bold transition-colors duration-200 uppercase ${
            activeSide === "right"
              ? "bg-slate-200 text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
          onClick={() => handleToggle("right")}
        >
          {rightLabel}
        </button>
      </div>

      <div className="mt-4">
        {activeSide === "right" ? rightComponent : leftComponent}
      </div>
    </>
  );
};

export default InterfaceSwitch;
