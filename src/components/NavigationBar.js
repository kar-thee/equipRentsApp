import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import { Link } from "react-router-dom";

import MenuListPicker, {
  adminMenuList,
  privateMenuList,
  publicMenuList,
} from "../helpers/NavMenuList";
import useStateValFunc from "../hooks/useStateValFunc";
import useUserValidations from "../hooks/useUserValidations";

const NavigationBar = () => {
  const [state, setState] = useState({ anchorEl: "" });
  const [navList, setNavList] = useState(null);
  const [checkAuth, isAdmin] = useUserValidations();
  const [{ token, role }] = useStateValFunc();
  useEffect(() => {
    const listFunc = () => {
      if (isAdmin()) {
        return adminMenuList;
      } else if (checkAuth()) {
        return privateMenuList;
      } else {
        return publicMenuList;
      }
    };
    setNavList(listFunc());
  }, [checkAuth, isAdmin, token, role]);

  console.log(navList, " navList");
  const changeHandler = (ev) => {
    setState((prev) => ({ ...prev, anchorEl: ev.currentTarget }));
  };

  const handleClose = () => {
    setState((prev) => ({ ...prev, anchorEl: null }));
  };

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
                <IconButton onClick={(ev) => changeHandler(ev)}>
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
              <Menu
                open={Boolean(state.anchorEl)}
                anchorEl={state.anchorEl}
                onClose={() => handleClose()}
              >
                {navList &&
                  navList.map((item) => (
                    <MenuItem
                      key={item.name}
                      sx={{ px: 4, color: "#ff4081" }}
                      component={Link}
                      to={item.path}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavigationBar;
