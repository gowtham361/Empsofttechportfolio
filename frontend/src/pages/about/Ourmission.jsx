import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

const OurMission = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 9 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={5}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Our Mission
        </Typography>

        <Typography variant="body1" color="white">
          Our mission at EMP Softtech is to empower individuals and businesses
          through quality training and innovative technology solutions.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Mission Card */}
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Empower Through Knowledge & Technology
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                We are committed to delivering industry-relevant training that
                equips students and professionals with practical skills required
                to succeed in today’s competitive technology landscape.
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Alongside training, we develop high-quality web and mobile
                applications that help businesses streamline operations, improve
                customer engagement, and achieve digital transformation.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                By focusing on innovation, quality, and continuous improvement,
                EMP Softtech aims to build long-term partnerships and create
                lasting value for our clients and learners.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mission Values */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Quality Education
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Delivering practical, hands-on training aligned with real-world
                industry needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Innovative Solutions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Building modern, scalable web and mobile applications using the
                latest technologies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Client Success
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ensuring customer satisfaction through transparency, reliability,
                and continuous support.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurMission;
