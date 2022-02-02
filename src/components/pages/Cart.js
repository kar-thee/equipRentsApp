import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useDispatchFunc from "../../hooks/useDispatchFunc";
import useStateValFunc from "../../hooks/useStateValFunc";

const Cart = () => {
  const [{ cart }] = useStateValFunc();
  const dispatch = useDispatchFunc();

  const cartRemoverFunc = (id) => {
    dispatch({
      type: "REMOVEFROMCART",
      payload: { id },
    });
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 1, my: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={9} lg={5}>
            <Paper elevation={12} sx={{ my: 5 }}>
              {cart.length > 0 && (
                <>
                  <TableContainer component={Box} sx={{ py: 2, my: 1 }}>
                    <Table aria-label="simple table">
                      <TableHead
                        sx={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}
                      >
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Qty</TableCell>
                          <TableCell align="right">Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cart.map((cartObj) => (
                          <TableRow
                            key={cartObj.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {cartObj.name}
                            </TableCell>
                            <TableCell align="right">{cartObj.price}</TableCell>
                            <TableCell align="right">
                              {cartObj.qtyNeeded}
                            </TableCell>
                            <TableCell align="right">
                              ₹ {cartObj.price * cartObj.qtyNeeded}
                            </TableCell>
                          </TableRow>
                        ))}

                        <TableRow>
                          <TableCell
                            align="right"
                            sx={{ color: "#ff4081", fontWeight: "bold" }}
                          >
                            Total Amount
                          </TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell
                            align="right"
                            sx={{ color: "#ff4081", fontWeight: "bold" }}
                          >
                            {/* first get price and qtyNeeded, multiply and store as array then
                             use reduce to add them */}
                            ₹{" "}
                            {cart.length > 0 &&
                              cart
                                .map(
                                  (cartObj) => cartObj.price * cartObj.qtyNeeded
                                )
                                .reduce((acc, val) => acc + val)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography variant="h6" align="right" sx={{ p: 3 }}>
                    Amount to Pay : ₹{" "}
                    {cart.length > 0 &&
                      cart
                        .map((cartObj) => cartObj.price * cartObj.qtyNeeded)
                        .reduce((acc, val) => acc + val)}
                    .00
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      sx={{ my: 3, p: 3, background: "#ff4081" }}
                    >
                      Proceed to CheckOut
                    </Button>
                  </Box>
                </>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9} lg={7} sx={{ py: 2, my: 2 }}>
            <Typography variant="h5">
              Total Products in Cart : {cart.length}
            </Typography>
            {cart.length > 0 &&
              cart.map((cartObj) => (
                <Card
                  sx={{
                    display: { md: "flex" },
                    my: 2,
                    width: "100%",
                    color: "#ff4081",
                  }}
                  key={cartObj.id}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: { md: 251 } }}
                    image={cartObj.imgUrl}
                    alt={cartObj.name}
                  />

                  <Stack sx={{ px: 3 }}>
                    <Tooltip title="View Product">
                      <Box
                        component={Link}
                        to={`/store/product/${cartObj.id}`}
                        sx={{ textDecoration: "none", color: "unset" }}
                      >
                        <CardContent>
                          <Typography variant="h5">{cartObj.name}</Typography>
                        </CardContent>
                        <CardContent>
                          <Typography variant="caption">
                            {cartObj.section} / {cartObj.category}
                          </Typography>
                        </CardContent>
                        <CardContent>
                          <Typography variant="h6">
                            Price : ₹{cartObj.price}.00
                          </Typography>
                        </CardContent>
                        <CardContent>
                          <Typography variant="body2">
                            {" "}
                            Qty : {cartObj.qtyNeeded}
                          </Typography>
                        </CardContent>
                      </Box>
                    </Tooltip>
                    <CardActions>
                      <Button
                        variant="contained"
                        sx={{ my: 2 }}
                        onClick={() => cartRemoverFunc(cartObj.id)}
                      >
                        Remove from Cart
                      </Button>
                    </CardActions>
                  </Stack>
                </Card>
              ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
