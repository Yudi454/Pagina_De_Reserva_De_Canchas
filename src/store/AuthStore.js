import { create } from "zustand";

export const useStore = create((set) => ({
  color: "Claro",
  changeColor: (newColor) => set(() => ({ color: newColor })),
}));
