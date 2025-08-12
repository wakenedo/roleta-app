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
      <div className="flex bg-white/5 backdrop-blur-md border border-white/10 rounded-t-xs p-1 h-9 space-x-1 w-full mt-3">
        <button
          className={`flex-1 px-4 py-1 rounded-xs text-xs font-bold transition-colors duration-200 uppercase ${
            activeSide === "left"
              ? "bg-slate-700 text-slate-50 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
          onClick={() => handleToggle("left")}
        >
          {leftLabel}
        </button>
        <button
          className={`flex-1 px-4 py-1 rounded-xs text-xs font-bold transition-colors duration-200 uppercase ${
            activeSide === "right"
              ? "bg-slate-700 text-slate-50 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
          onClick={() => handleToggle("right")}
        >
          {rightLabel}
        </button>
      </div>

      <div className="w-full">
        {activeSide === "right" ? rightComponent : leftComponent}
      </div>
    </>
  );
};

export default InterfaceSwitch;
