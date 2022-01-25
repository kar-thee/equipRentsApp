import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import InputIcon from "@mui/icons-material/Input";

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [helper, setHelper] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (ev) => {
    setState((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const onSubmitHandler = () => {
    state.name
      ? setHelper((prev) => ({ ...prev, name: "" }))
      : setHelper((prev) => ({ ...prev, name: "Necessary Field" }));

    state.email
      ? setHelper((prev) => ({ ...prev, email: "" }))
      : setHelper((prev) => ({ ...prev, email: "Necessary Field" }));

    state.password
      ? setHelper((prev) => ({ ...prev, password: "" }))
      : setHelper((prev) => ({ ...prev, password: "Necessary Field" }));

    if (state.email && state.password && state.name) {
      console.log(state);
      //link api and loader here
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
          maxWidth="sm"
          sx={{ py: 2, my: 2, border: "4px solid pink" }}
        >
          <Typography variant="h6" sx={{ color: "#ff4081" }} align="center">
            Register User
          </Typography>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={10} md={8}>
              <TextField
                id="name"
                label="Name"
                fullWidth
                required
                name="name"
                value={state.name}
                onChange={(ev) => onChangeHandler(ev)}
                helperText={helper.name}
                error={helper.name ? true : false}
              />
            </Grid>
            <Grid item xs={10} md={8}>
              <TextField
                id="email"
                label="Email"
                fullWidth
                required
                name="email"
                value={state.email}
                onChange={(ev) => onChangeHandler(ev)}
                helperText={helper.email}
                error={helper.email ? true : false}
              />
            </Grid>
            <Grid item xs={10} md={8}>
              <TextField
                id="password"
                label="Password"
                fullWidth
                required
                name="password"
                value={state.password}
                onChange={(ev) => onChangeHandler(ev)}
                helperText={helper.password}
                error={helper.password ? true : false}
              />
            </Grid>
            <Grid item xs={10} md={8}>
              <Button
                variant="contained"
                sx={{ background: "#ff4081", my: 1 }}
                endIcon={<InputIcon />}
                onClick={() => onSubmitHandler()}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
