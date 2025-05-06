import { create } from "zustand";

interface State {
  isSideMenu: boolean;
  isSideOpenMenu: () => void;
  isSideCloseMenu: () => void;
}

export const useUiStore = create<State>()((set) => ({
  isSideMenu: false,

  isSideOpenMenu: () => {
    set({ isSideMenu: true });
  },

  isSideCloseMenu: () => {
    set({ isSideMenu: false });
  },
}));
