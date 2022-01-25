import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";

import { Routes, Route } from "react-router";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/pages/Cart";

import LandingPage from "./components/pages/LandingPage";
import ReachUs from "./components/pages/ReachUs";
import Shop from "./components/pages/Shop";
import AppProvider from "./context/AppProvider";
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
            <Route path="*" element={<Shop />} />
          </Routes>
          <SnackBars />
          <Footer />
        </ThemeProvider>
      </AppProvider>
    </>
  );
};

export default App;
