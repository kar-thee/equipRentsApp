import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";

import { Routes, Route } from "react-router";
import ProductCreate from "./components/admin/ProductCreate";
import ProductDelete from "./components/admin/ProductDelete";
import ProductGetAll from "./components/admin/ProductGetAll";
import ProductGetOne from "./components/admin/ProductGetOne";
import ProductMainPage from "./components/admin/ProductMainPage";
import ProductUpdate from "./components/admin/ProductUpdate";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/pages/Cart";

import LandingPage from "./components/pages/LandingPage";
import ReachUs from "./components/pages/ReachUs";
import Shop from "./components/pages/Shop";
import Protected from "./components/Protected";
import AppProvider from "./context/AppProvider";
import Loader from "./helpers/Loader";
import SnackBars from "./helpers/SnackBars";

const theme = createTheme({
  palette: {
    background: {
      default: "#fce4ec",
    },
  },
});
const App = () => {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ReachUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/user/signin" element={<SignIn />} />
            <Route
              path="/admin/crud/"
              element={
                <Protected redirect={<SignIn />}>
                  <ProductMainPage />
                </Protected>
              }
            >
              <Route
                path="*"
                element={
                  <Protected redirect={<SignIn />}>
                    <ProductMainPage />
                  </Protected>
                }
              />
              <Route
                path="productGetAll"
                element={
                  <Protected>
                    <ProductGetAll />
                  </Protected>
                }
              />
              <Route
                path="productGetOne/:id"
                element={
                  <Protected redirect={<SignIn />}>
                    <ProductGetOne />
                  </Protected>
                }
              />
              <Route
                path="productCreate"
                element={
                  <Protected redirect={<SignIn />}>
                    <ProductCreate />
                  </Protected>
                }
              />
              <Route
                path="productUpdate/:id"
                element={
                  <Protected redirect={<SignIn />}>
                    <ProductUpdate />
                  </Protected>
                }
              />
              <Route
                path="productDelete/:id"
                element={
                  <Protected redirect={<SignIn />}>
                    <ProductDelete />
                  </Protected>
                }
              />
            </Route>
            <Route path="*" element={<ReachUs />} />
          </Routes>
          <>
            <Loader />
          </>
          <SnackBars />
          <Footer />
        </ThemeProvider>
      </AppProvider>
    </>
  );
};

export default App;
