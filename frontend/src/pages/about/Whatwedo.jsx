import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

const WhatWeDo = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        color="primary"
      >
        What We Do
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        color="white"
        sx={{ mb: 5 }}
      >
        At EMP Softtech, we focus on training future-ready professionals and
        developing scalable digital solutions for businesses across the globe.
      </Typography>

      <Grid container spacing={4}>
        {/* Training */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Professional IT Training
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We provide industry-oriented training programs in modern
                technologies, helping students and professionals gain
                real-world skills with hands-on projects and expert guidance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Web Development */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Web Application Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We design and develop secure, scalable, and high-performance web
                applications using modern frameworks and technologies tailored
                to business needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mobile Development */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Mobile Application Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our team builds intuitive and feature-rich mobile applications
                for Android and iOS platforms, ensuring smooth performance and
                excellent user experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatWeDo;
