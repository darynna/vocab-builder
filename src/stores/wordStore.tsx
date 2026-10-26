import {create} from "zustand";

type WordState = {
    categories: string[];
    setCategories: (categories: string[]) => void;
};

export const useWordStore = create<WordState>((set) =>({
    categories: [],
    setCategories: (categories) => set({categories}),
}));