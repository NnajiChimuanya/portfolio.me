import React, { createContext, useReducer } from "react";

type InitialState = typeof initalState;

type Action =
  | {
      type: "SET_MOREOPTIONS";
      payload: boolean;
    }
  | {
      type: "SET_SUBSCRIBEOPTION";
      payload: boolean;
    };

interface ContextProviderProps {
  children: React.ReactNode;
}

const initalState = {
  moreOptions: false,
  subscribe: false,
};

const reducer = (state: InitialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_MOREOPTIONS":
      return {
        ...state,
        moreOptions: payload,
      };

    case "SET_SUBSCRIBEOPTION":
      return {
        ...state,
        subscribe: payload,
      };

    default:
      return state;
  }
};

export const PortfolioContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<Action>;
}>({ state: initalState, dispatch: () => {} });

export const PortfolioContextProvider = ({
  children,
}: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <PortfolioContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  );
};
