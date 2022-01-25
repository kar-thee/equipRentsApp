import { useReducer, useEffect } from "react";
import initialValues from "./InititalValues";
import ReducerFunc from "./ReducerFunc";

const useStore = () => {
  const [state, dispatch] = useReducer(ReducerFunc, initialValues, () => {
    const tokenVal = JSON.parse(localStorage.getItem("token"));
    const roleVal = JSON.parse(localStorage.getItem("role"));

    return { ...initialValues, token: tokenVal || "", role: roleVal || "" };
  });

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.token));
    localStorage.setItem("role", JSON.stringify(state.role));
  }, [state.token, state.role]);

  return [state, dispatch];
};

export default useStore;
