import React from "react";

import { Backdrop, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
    </>
  );
};

export default Loader;
