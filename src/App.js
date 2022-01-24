import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";

import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/pages/Cart";

import LandingPage from "./components/pages/LandingPage";
import ReachUs from "./components/pages/ReachUs";
import Shop from "./components/pages/Shop";

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ReachUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Shop />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
