const ReducerFunc = (state, actionObj) => {
  switch (actionObj.type) {
    case "signin": {
      return {
        ...state,
        token: actionObj.payload.token,
        role: actionObj.payload.role,
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

    default:
      return state;
  }
};

export default ReducerFunc;
