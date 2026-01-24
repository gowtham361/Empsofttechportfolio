import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

const OurValues = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 9}}>
      {/* Header */}
      <Box textAlign="center" mb={5}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Our Values
        </Typography>

        <Typography variant="body1" color="white">
          At EMP Softtech, our values define who we are, how we work, and how we
          deliver excellence to our clients and learners.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Integrity */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Integrity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We believe in honesty, transparency, and ethical practices in
                every interaction with our clients, students, and partners.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quality */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Quality Excellence
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are committed to delivering high-quality training and
                development solutions that meet industry standards and exceed
                expectations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Innovation */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We embrace new ideas, modern technologies, and creative
                approaches to build future-ready solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Learning */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Continuous Learning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We promote continuous learning and skill development for both
                our team and our trainees.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Collaboration */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Collaboration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We work closely with clients and learners to understand their
                goals and deliver effective solutions together.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Customer Focus */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Customer Focus
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Client and student success is at the heart of everything we do,
                driving us to deliver reliable support and measurable results.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurValues;
