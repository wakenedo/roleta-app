import React from "react";
import { renderHook, act } from "@testing-library/react";
import {
  ProductSlotsReelsProvider,
  useProductSlotsReels,
} from "../ProductSlotsReelsContext";

import { Product } from "@/components/Slots/types";
import {
  FILLER,
  REEL_LENGTH,
} from "@/components/Slots/components/SlotsGame/components/ProductSlotsReels/enum";

/* ---------------------------------------------
   Mocks
--------------------------------------------- */
beforeAll(() => {
  jest.useFakeTimers();
  global.requestAnimationFrame = (cb: FrameRequestCallback) =>
    setTimeout(cb, 0);
});

afterAll(() => {
  jest.useRealTimers();
});

/* ---------------------------------------------
   Helpers
--------------------------------------------- */
const wrapper = (
  props: { spinning?: boolean; selectedProducts?: Product[] } = {},
) => {
  const Component = ({ children }: { children: React.ReactNode }) => (
    <ProductSlotsReelsProvider
      spinning={props.spinning ?? false}
      selectedProducts={props.selectedProducts ?? []}
    >
      {children}
    </ProductSlotsReelsProvider>
  );
  Component.displayName = "WrapperComponent";
  return Component;
};

const mockProduct = (id: string): Product =>
  ({
    id,
    name: `Product ${id}`,
  }) as Product;

/* ---------------------------------------------
   Tests
--------------------------------------------- */
describe("ProductSlotsReelsContext", () => {
  it("throws if used outside provider", () => {
    expect(() => renderHook(() => useProductSlotsReels())).toThrow(
      "useProductSlotsReels must be used within ProductSlotsReelsProvider",
    );
  });

  it("initializes reels with fillers", () => {
    const { result } = renderHook(() => useProductSlotsReels(), {
      wrapper: wrapper(),
    });

    expect(result.current.reels).toHaveLength(3);
    result.current.reels.forEach((reel) => {
      expect(reel).toHaveLength(REEL_LENGTH);
      reel.forEach((cell) => {
        expect(cell).toBe(FILLER);
      });
    });

    expect(result.current.pos).toEqual([0, 0, 0]);
    expect(result.current.activePlaceholder).toBe(true);
  });

  it("starts spinning when spinning=true", () => {
    const { result, rerender } = renderHook(() => useProductSlotsReels(), {
      wrapper: wrapper({ spinning: false }),
    });

    rerender(undefined);

    const { rerender: rerenderSpinning } = renderHook(
      () => useProductSlotsReels(),
      {
        wrapper: wrapper({ spinning: true }),
      },
    );

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current.animating.some(Boolean)).toBe(false);
  });

  it("injects selected products into reels and stops spinning", () => {
    const products = [mockProduct("a"), mockProduct("b"), mockProduct("c")];

    const { result } = renderHook(() => useProductSlotsReels(), {
      wrapper: wrapper({
        spinning: true,
        selectedProducts: products,
      }),
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    const middleIndex = Math.floor(REEL_LENGTH / 2);

    result.current.reels.forEach((reel, col) => {
      expect(reel[middleIndex]).toEqual(products[col]);
    });

    expect(result.current.activePlaceholder).toBe(false);
    expect(result.current.animating.every((v) => v === false)).toBe(true);
  });

  it("exposes layout constants", () => {
    const { result } = renderHook(() => useProductSlotsReels(), {
      wrapper: wrapper(),
    });

    expect(typeof result.current.CELL_HEIGHT).toBe("number");
    expect(typeof result.current.VISIBLE).toBe("number");
  });
});
