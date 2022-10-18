import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Intial State
const intialState = {
  users: [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
  ],
};

//create context

export const GloablContext = createContext(intialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  return (
    <GloablContext.Provider
      value={{
        users: state.users,
        removeUser,
      }}
    >
      {children}
    </GloablContext.Provider>
  );
};
