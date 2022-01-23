import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ p: 2, background: "#880e4f" }}>
        <Stack
          direction="row"
          spacing={5}
          sx={{
            justifyContent: "space-between",
            p: 2,
            color: "#fce4ec",
            alignItems: "center",
          }}
        >
          <Typography variant="overline" sx={{ color: "#ff80ab" }}>
            EquipRents
          </Typography>
          <Typography variant="caption">
            Designed and Developed By Kartheekeyan.S
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{ p: { xs: 0, md: 2 }, color: "#f8bbd0" }}>
          <Typography variant="subtitle2">
            I have used assets (images and descriptions of Products) collected
            from Many Different Online Rental/Shopping/BlogPosts/E-Commerce
            WebApplications. If You are the owner of these assets and have
            concern for privacy of these assets used in this application, Please
            Contact me via Email -<u> fsdkartheek@gmail.com </u>to remove it
            asap. I know these assets have limited copyrights and I didn't
            commit any unlawful activities with these assets. I hereby declare
            that I used these assets only for Educational Purposes(I am Learning
            Web Development).{" "}
          </Typography>
          <Typography variant="caption">
            This is not a Business Platform only a WebApp Project.
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
