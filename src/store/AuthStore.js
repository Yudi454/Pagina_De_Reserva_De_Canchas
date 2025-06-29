import { create } from "zustand";

export const useStore = create((set) => ({
  color: "Claro",
  user: null,
  setUser: (newUser) => set(() => ({user: newUser})),
  loadUser: () => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioGuardado) set({ user: usuarioGuardado });
  },
  changeColor: (newColor) => set(() => ({ color: newColor })),
}));
