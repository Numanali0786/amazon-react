import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        bagCount: state.bagCount + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
        bagCount: state.bagCount - 1,
      };

    case "LOGIN":
      localStorage.setItem("user", state);
      return { ...state, user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("user");
      return { ...state, user: null };

    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [], //[{id,title,price,img},{id,title,price,img},{id,title,price,img}]
    bagCount: 0,
    user: null,
  });

  console.log(state);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
