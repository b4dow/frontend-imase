"use client";

import { Dispatch, ReactNode, createContext, useReducer } from "react";
import {
  MenuAction,
  MenuReducer,
  MenuState,
  InitialState,
} from "@/reducers/MenuReducer";

interface MenuContextType {
  state: MenuState;
  dispatch: Dispatch<MenuAction>;
}

export const MenuContext = createContext<MenuContextType>(
  {} as MenuContextType,
);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [state, dispatch] = useReducer(MenuReducer, InitialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
