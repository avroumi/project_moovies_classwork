import { create } from "zustand";
import { persist } from "zustand/middleware";

interface zustandProps {
  favorites: number[];
  add: (num: number) => void;
  subtract: (num: number) => void;
  clear: () => void;
}

export const useFavoriteStore = create<zustandProps>()(
  persist<zustandProps>(
    (set, get) => ({
      favorites: [],

      add: (num) =>
        set((state) => ({
          favorites: [...state.favorites, num],
        })),
      subtract: (num) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== num),
        })),
      clear: () => set({ favorites: [] }),
    }),
    { name: "favorites-storage" },
  ),
);
