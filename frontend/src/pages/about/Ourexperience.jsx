import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

const OurExperience = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      {/* Header */}
      <Box textAlign="center" mb={5}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Our Experience
        </Typography>

        <Typography variant="body1" color="white">
          At EMP Softtech, our experience is built on real-world projects,
          industry-focused training, and delivering reliable digital solutions.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Industry Experience */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Industry Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our team has hands-on experience working with diverse industries,
                including education, healthcare, enterprise solutions,
                e-commerce, and service-based platforms. We understand business
                challenges and deliver technology-driven solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Training Expertise */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Training Expertise
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We have trained students and working professionals with
                industry-relevant skills through practical sessions, live
                projects, and real-time development exposure.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Web Development */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Web Development Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Extensive experience in building responsive, scalable web
                applications using modern technologies such as React.js,
                Node.js, and secure backend architectures.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mobile Development */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Mobile App Development Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Strong experience in developing high-quality mobile applications
                for Android and iOS platforms, focusing on performance,
                usability, and modern UI standards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Project Delivery */}
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Project Delivery & Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                From requirement analysis to deployment and maintenance, we
                follow structured development processes to ensure timely
                delivery and long-term support.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurExperience;
