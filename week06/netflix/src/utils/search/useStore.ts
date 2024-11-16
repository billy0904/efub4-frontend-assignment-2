import { create } from "zustand";

interface SearchStoreState {
  searchText: string;
  setSearch: (text: string) => void;
}

export const useSearchStore = create<SearchStoreState>((set) => ({
  searchText: "",
  setSearch: (movie: string) => set({ searchText: movie }),
}));
