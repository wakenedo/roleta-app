"use client";

import JsonView from "@uiw/react-json-view";
import { TenantProduct } from "@/context/TenantContext/types";
const CheckoutProductJsonViewer = ({
  products,
}: {
  products: TenantProduct[];
}) => {
  return (
    <div className="flex flex-col gap-0 ">
      <span className="text-xs font-semibold text-slate-50">JSON </span>

      <div className="bg-slate-300 p-4 max-h-75 overflow-auto [scrollbar-width:none]">
        <JsonView
          value={products}
          collapsed={2}
          displayDataTypes={false}
          style={{
            backgroundColor: "transparent",
            fontSize: "0.7rem",
          }}
        />
      </div>
    </div>
  );
};

export default CheckoutProductJsonViewer;
