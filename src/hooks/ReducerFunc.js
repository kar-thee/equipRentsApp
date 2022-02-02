const ReducerFunc = (state, actionObj) => {
  switch (actionObj.type) {
    case "signin": {
      return {
        ...state,
        token: actionObj.payload.token,
        role: actionObj.payload.role,
      };
    }
    case "signOut": {
      return {
        token: "",
        role: "",
        loaderState: false,
        snackBarType: "error",
        snackBarMsg: "",
      };
    }
    case "startLoading": {
      return { ...state, loaderState: true };
    }
    case "stopLoading": {
      return { ...state, loaderState: false };
    }
    case "snackBar": {
      return {
        ...state,
        snackBarType: actionObj.payload.type,
        snackBarMsg: actionObj.payload.msg,
      };
    }

    case "ADDTOCART": {
      return {
        ...state,
        cart: [...state.cart, actionObj.payload.idObj],
      };
    }
    case "REMOVEFROMCART": {
      const filterArr = state.cart.filter((cartIdObj) =>
        cartIdObj.id === actionObj.payload.id ? "" : cartIdObj
      );
      return {
        ...state,
        cart: [...filterArr],
      };
    }

    default:
      return state;
  }
};

export default ReducerFunc;
