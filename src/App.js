import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";

import { Routes, Route } from "react-router";
import MessageGetAll from "./components/admin/MessageGetAll";
import MessageGetOne from "./components/admin/MessageGetOne";
import OrderTable from "./components/admin/order_mgmt/OrderTable";
import ProductCreate from "./components/admin/ProductCreate";
import ProductFind from "./components/admin/ProductFind";
import ProductGetAll from "./components/admin/ProductGetAll";
import ProductGetOne from "./components/admin/ProductGetOne";
import ProductMainPage from "./components/admin/ProductMainPage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/pages/Cart";

import LandingPage from "./components/pages/LandingPage";
import ProductInfo from "./components/pages/ProductInfo";
import ReachUs from "./components/pages/ReachUs";
import SectionsStore from "./components/pages/SectionsStore";
import Shop from "./components/pages/Shop";
import Orders from "./components/private/Orders";
import Profile from "./components/private/Profile";
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
            <Route path="/store" element={<Shop />} />
            <Route path="/store/:sectionName" element={<SectionsStore />} />
            <Route path="/store/product/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/user/signin" element={<SignIn />} />

            <Route
              path="/user/profile"
              element={
                <Protected redirect={<SignIn />}>
                  <Profile />
                </Protected>
              }
            />
            <Route
              path="/user/orders"
              element={
                <Protected redirect={<SignIn />}>
                  <Orders />
                </Protected>
              }
            />
            <Route
              path="/admin/ordersMgmt"
              element={
                <Protected redirect={<SignIn />}>
                  <OrderTable />
                </Protected>
              }
            />
            <Route
              path="/admin/msgAll"
              element={
                <Protected redirect={<SignIn />}>
                  <MessageGetAll />
                </Protected>
              }
            />
            <Route
              path="/admin/msgOne/:id"
              element={
                <Protected redirect={<SignIn />}>
                  <MessageGetOne />
                </Protected>
              }
            />

            <Route
              path="/admin/crud/"
              element={
                <Protected redirect={<SignIn />}>
                  <ProductMainPage />
                </Protected>
              }
            >
              <Route
                path=""
                element={
                  <Protected redirect={<SignIn />}>
                    <ProductGetAll />
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
                path="productFind"
                element={
                  <Protected redirect={<SignIn />}>
                    <ProductFind />
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
