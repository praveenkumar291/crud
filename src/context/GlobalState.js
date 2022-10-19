import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Intial State
const intialState = {
  users: [],
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

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };
  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };
  return (
    <GloablContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GloablContext.Provider>
  );
};
