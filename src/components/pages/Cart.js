import { Button } from "@mui/material";
import React from "react";
import useStateValFunc from "../../hooks/useStateValFunc";

const Cart = () => {
  const [{ cart }] = useStateValFunc();
  console.log(cart);
  return (
    <div>
      <Button>Cart</Button>
      {cart && JSON.stringify(cart)}
    </div>
  );
};

export default Cart;
