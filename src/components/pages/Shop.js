import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import LazyLoad from "react-lazyload";
import { Link, useNavigate } from "react-router-dom";
import GetAllProductsApi from "../../apis/admin/productCrud/GetAllProductsApi";
import StoreGetApi from "../../apis/StoreGetApi";
import useDispatchFunc from "../../hooks/useDispatchFunc";
import useStateValFunc from "../../hooks/useStateValFunc";

const Shop = () => {
  const [productsArray, setProductsArray] = useState();

  const dispatch = useDispatchFunc();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      dispatch({ type: "startLoading" });
      const response = await StoreGetApi();
      dispatch({ type: "stopLoading" });
      if (response.data.type === "success") {
        //getting random array
        const arr = response.data.productFound;
        const sortedArr = arr.sort(() => Math.random() - 0.5);
        setProductsArray(sortedArr);

        dispatch({
          type: "snackBar",
          payload: { msg: response.data.msg, type: "success" },
        });
      } else {
        dispatch({
          type: "snackBar",
          payload: { msg: response.data.msg, type: "error" },
        });
      }
    })();
  }, [dispatch, token]);

  return (
    <>
      {productsArray && (
        <Container maxWidth="lg" sx={{ my: 5, background: "#ff4081" }}>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
              my: 2,
              pb: 2,
              "& .MuiCard-root:hover": {
                background: "#f8bbd0",
                transition: "3s",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                /* transition: .5s ease-in-out; [0.5 seconds] */
              },
            }}
          >
            {productsArray.map(({ url, _id, name, price }) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={_id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    mx: "auto",
                  }}
                >
                  <CardActionArea
                    onClick={() => navigate(`/store/product/${_id}`)}
                  >
                    <CardContent>
                      <Typography variant="body1" noWrap>
                        {name}
                      </Typography>
                    </CardContent>
                    <LazyLoad height={220}>
                      <CardMedia
                        component="img"
                        loading="lazy"
                        height="220"
                        sx={{ objectFit: "contain" }}
                        image={url}
                        alt={`Browse ${name}`}
                      />
                    </LazyLoad>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#ff4081" }}>
                        ₹{price}.00
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Shop;
