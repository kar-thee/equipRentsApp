import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ImgCarousal from "../ImgCarousal";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          my: { xs: 0, md: 4 },
          maxWidth: "md",
          mx: "auto",
        }}
      >
        <ImgCarousal />
      </Box>
      <Container maxWidth="xl">
        {/* <Box sx={{ minHeight: "1000px", background: "greenyellow" }}>sdc</Box> */}
        <Container maxWidth="md">
          {/* EquipRents is One-Stop Shop where You can Rent Things Online  */}
          <Grid
            container
            sx={{
              justifyContent: "center",
              background: "#880e4f",
              m: { xs: 0, md: 2 },
              my: { xs: 1, sm: 0 },
            }}
          >
            <Grid item sx={{ p: 3, m: 2, color: "#fce4ec" }} xs="12" md="8">
              <Typography variant="h6">
                EquipRents is One-Stop Shop where You can Rent Equipments Online
              </Typography>
              <Box sx={{ p: 2, my: 2 }}>
                <Button variant="contained" size="large">
                  Explore Store
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container
          maxWidth="xl"
          sx={{ my: 5, justifyContent: "center", background: "#ff4081" }}
        >
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", my: 2, pb: 2 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((d) => (
              <Grid item xs="12" sm="6" md="4" lg="3" key={d}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography variant="body1">Electronics</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://d3juy0zp6vqec8.cloudfront.net/images/product/MacBook%20Pro%20i7.jpg"
                    alt="sdc"
                  />
                  <CardActions>
                    <Button size="small">See More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default LandingPage;
