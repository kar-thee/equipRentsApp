import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <AppBar sx={{ background: "#ec407a" }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                flex: 1,
              }}
            >
              <Box
                component={Link}
                to="/"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="h6">EquipRents</Typography>
              </Box>
            </Box>

            <Box sx={{ mr: { xs: 2, md: 3 } }} component={Link} to="/cart">
              <Tooltip title="Cart">
                <IconButton color="secondary">
                  <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon sx={{ color: "#fff" }} />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ mr: { xs: 2, md: 3 } }} component={Link} to="/contact">
              <Tooltip title="Contact Us">
                <IconButton color="secondary">
                  <MailOutlineRoundedIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Tooltip>
            </Box>

            <Box>
              <Tooltip title="Manage Account">
                <IconButton>
                  <Avatar
                    sx={{
                      color: "#ff4081",
                      "&:hover": {
                        color: "#880e4f",
                      },
                    }}
                  >
                    <PersonIcon
                      sx={{
                        color: "#880e4f",
                        "&:hover": {
                          color: "#ff4081",
                        },
                      }}
                    />
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavigationBar;
