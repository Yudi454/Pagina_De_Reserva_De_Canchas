import { create } from "zustand";

export const useStore = create((set) => ({
  color: "Claro",
  user: null,
  carritoReservas: [],
  agregarReserva: (reserva) =>
    set((state) => ({
      carritoReservas: [...state.carritoReservas, reserva],
    })),
  cargarCarritoReservas: (newCarrito) => set((stat) => ({carritoReservas: newCarrito})),
  quitarReserva: (id) =>
    set((state) => ({
      carritoReservas: state.carritoReservas.filter((r) => r.id !== id),
    })),
  setUser: (newUser) => set(() => ({ user: newUser })),
  loadUser: () => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioGuardado) set({ user: usuarioGuardado });
  },
  changeColor: (newColor) => set(() => ({ color: newColor })),
}));
