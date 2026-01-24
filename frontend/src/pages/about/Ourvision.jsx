import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

const OurVision = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={5}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Our Vision
        </Typography>

        <Typography variant="body1" color="white">
          Our vision at EMP Softtech is to shape the future through technology,
          innovation, and knowledge-driven growth.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Main Vision */}
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Building a Future-Ready Digital World
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                We envision becoming a trusted technology and training partner
                recognized for delivering high-quality web and mobile
                applications along with industry-focused learning programs.
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Our goal is to bridge the gap between education and industry by
                equipping individuals with practical skills while helping
                businesses adopt innovative digital solutions.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                By continuously evolving with technology, EMP Softtech strives
                to create long-term value, global impact, and sustainable growth
                for clients, learners, and partners.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Vision Pillars */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Global Excellence
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Delivering world-class training and digital solutions with
                international standards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Innovation & Growth
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Driving innovation through continuous learning and adoption of
                emerging technologies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Empowering People
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Empowering individuals and organizations to achieve success
                through knowledge and technology.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurVision;
