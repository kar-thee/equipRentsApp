import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateProductApi from "../../apis/admin/productCrud/CreateProductApi";
import RequestSignedUrlApi from "../../apis/admin/RequestSignedUrlApi";
import UploadImgToS3Api from "../../apis/admin/UploadImgToS3Api";
import useDispatchFunc from "../../hooks/useDispatchFunc";
import useStateValFunc from "../../hooks/useStateValFunc";

const ProductCreate = () => {
  const [state, setState] = useState({ uploadImg: undefined });
  const [{ token }] = useStateValFunc();
  const dispatch = useDispatchFunc();

  const onChangeHandler = (ev) => {
    setState((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.files[0],
    }));
  };

  //biggest submitHandler
  const onSubmitHandler = async () => {
    if (state && state.uploadImg) {
      //img appending to formData
      const formData = new FormData();
      formData.append("file", state.uploadImg, state.uploadImg.name);
      dispatch({ type: "startLoading" });

      //request PreSignedUrl from S3 via our server
      const body = {
        section: "testing",
        name: state.uploadImg.name || "troy",
      };
      const response = await RequestSignedUrlApi(body, token);

      //if signedUrlApi got success....
      if (response && response.data.type === "success") {
        dispatch({
          type: "snackBar",
          payload: { msg: response.data.msg, type: "success" },
        });
        //now we have s3url, upload our img to that url directly from client to awsS3 bucket
        const uploadUrl = response.data.uploadUrl;
        const uploadImg = state.uploadImg;
        const s3Response = await UploadImgToS3Api(uploadUrl, uploadImg);

        //if img upload to s3 successful...
        if (s3Response.type === 200) {
          //now we uploaded img,now store the imgurl+other product info
          // in db via our server (POST request) ---finalApi call
          //img url is present in the url we got in first step
          const receievedUrl = uploadUrl.split("?")[0];
          const productBody = {
            productUrl: receievedUrl,
            productName: state.uploadImg.name,
            section: "Electronics",
            category: "recreation",
            price: 50000,
            desc: "You cant buy this easily!!!",
          };
          const productRes = await CreateProductApi(productBody, token);

          //if createProductApi is successful
          if (productRes.data.type === "success") {
            dispatch({
              type: "snackBar",
              payload: { msg: productRes.data.msg, type: "success" },
            });
          }
          //if createProductApi is successful
          else {
            dispatch({
              type: "snackBar",
              payload: { msg: productRes.data.msg, type: "error" },
            });
          }
        } //if img upload to s3 failed
        else {
          dispatch({
            type: "snackBar",
            payload: { msg: s3Response.data.msg, type: "error" },
          });
        }
      } //if signedUrlApi got failed
      else {
        dispatch({
          type: "snackBar",
          payload: { msg: response && response.data.msg, type: "error" },
        });
        setState(null);
      }
      dispatch({ type: "stopLoading" });
    }
  };

  return (
    <>
      <Box
        sx={{
          py: 2,
          my: 3,
          "& .MuiTextField-root": {
            my: 2,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ py: 2, my: 2, border: "4px solid pink" }}
        >
          <Typography variant="h6" sx={{ color: "#ff4081" }} align="center">
            Create Product
          </Typography>

          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={10} md={8}>
              <Box component="form">
                <Input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  name="uploadImg"
                  onChange={(ev) => onChangeHandler(ev)}
                />
              </Box>
            </Grid>
            <Grid item xs={10} md={8}>
              <Button
                variant="contained"
                sx={{ background: "#ff4081", my: 1 }}
                onClick={() => onSubmitHandler()}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductCreate;
