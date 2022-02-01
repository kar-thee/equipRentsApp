import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDispatchFunc from "../../hooks/useDispatchFunc";

import StoreGetProductApi from "../../apis/StoreGetProductApi";
import { Container } from "@mui/material";

const ProductInfo = () => {
  const [productState, setProductState] = useState();
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatchFunc();

  useEffect(() => {
    (async () => {
      dispatch({ type: "startLoading" });
      const response = await StoreGetProductApi(id);
      dispatch({ type: "stopLoading" });
      if (response.data.type === "success") {
        setProductState(response.data.productFound);
        dispatch({
          type: "snackBar",
          payload: { msg: response.data.msg, type: "success" },
        });
      } else {
        dispatch({
          type: "snackBar",
          payload: { msg: response.data.msg, type: "success" },
        });
      }
    })();
  }, [dispatch, id]);
  return (
    <>
      <>
        {productState && (
          <>
            <Container maxWidth="lg" sx={{ my: 3, background: "green" }}>
              {JSON.stringify(productState)}
            </Container>
          </>
        )}
      </>
    </>
  );
};

export default ProductInfo;
