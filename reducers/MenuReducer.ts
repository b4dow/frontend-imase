export type MenuAction =
  | {
      type: "OPEN_MENU";
    }
  | {
      type: "CLOSE_MENU";
    };

export interface MenuState {
  isSideOpen: boolean;
}

export const InitialState = {
  isSideOpen: false,
};

export const MenuReducer = (
  state: MenuState = InitialState,
  action: MenuAction,
) => {
  if (action.type === "OPEN_MENU") {
    return {
      ...state,
      isSideOpen: true,
    };
  }
  if (action.type === "CLOSE_MENU") {
    return {
      ...state,
      isSideOpen: false,
    };
  }

  return state;
};
