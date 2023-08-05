import { create } from "zustand";


export interface GameQuery {
  genre?: number | null;
  platform?: number | null;
  order?: string | null;
  searchValue?: string | null;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string | null) => void;
  setGenre: (genre: number | null) => void;
  setPlatform: (platform: number | null) => void; 
  setOrder: (order: string | null) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchValue) => set({ gameQuery: { searchValue } }),
  setGenre: (genre) => set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) => set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setOrder: (order) => set({ gameQuery: { order } }),
}));

interface Side {
  str: string;
  setStr: (str: string) => void;
}

const useSide = create<Side>((set) => ({
  str: "none", // Default value for the state
  setStr: (s: string) => set({ str: s }), // Action to update the state
}));
export {useSide}
export default useGameQueryStore;
