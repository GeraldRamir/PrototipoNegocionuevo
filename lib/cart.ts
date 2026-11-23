"use client";

import { create } from "zustand";

export type CartLine = { id: string; name: string; qty: number };

type CartState = {
  lines: Record<string, CartLine>;
  add: (item: { id: string; name: string }) => void;
  count: () => number;
};

export const useCart = create<CartState>((set, get) => ({
  lines: {},
  add: ({ id, name }) =>
    set((state) => {
      const current = state.lines[id];
      return { lines: { ...state.lines, [id]: { id, name, qty: (current?.qty ?? 0) + 1 } } };
    }),
  count: () => Object.values(get().lines).reduce((sum, line) => sum + line.qty, 0),
}));

export const useCartCount = () => useCart((state) => Object.values(state.lines).reduce((sum, line) => sum + line.qty, 0));
