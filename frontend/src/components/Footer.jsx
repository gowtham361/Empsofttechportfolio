import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => (
  <Box
    sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      textAlign: "center",

      backgroundColor: "#1e3c72",
      color: "#fff",
      zIndex: 1300,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <LinkedInIcon />
        </IconButton>
        <Typography variant="body2">LinkedIn</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <InstagramIcon />
        </IconButton>
        <Typography variant="body2">Instagram</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", }}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <FacebookIcon />
        </IconButton>
        <Typography variant="body2">Facebook</Typography>
    <Typography variant="body2">
      © 2025 EMP Softech Pvt Ltd. All Rights Reserved.
    </Typography>
      </Box>
      
    </Box>

  </Box>
);

export default Footer;
