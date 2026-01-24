import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const WhoWeAre = () => {
  return (
    <Container maxWidth="lg" sx={{ mt:10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="primary"
          >
            Who We Are
          </Typography>

          <Typography variant="body1" color="white" sx={{ mb: 3 }}>
            Emp Softtech is a technology-driven software development company
            committed to delivering innovative, scalable, and high-quality
            digital solutions. We specialize in building custom web applications,
            enterprise systems, and modern software products that help businesses
            grow and transform digitally.
          </Typography>

          <Typography variant="body1" color="white">
            With a strong focus on performance, security, and user experience,
            our team of skilled developers and designers works closely with
            clients to understand their needs and turn ideas into reliable
            technology solutions. At Emp Softtech, we believe in innovation,
            transparency, and long-term partnerships.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To empower businesses with cutting-edge software solutions that
                improve efficiency, enhance user experience, and drive digital
                growth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To become a trusted global technology partner by delivering
                reliable, innovative, and scalable digital solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhoWeAre;
