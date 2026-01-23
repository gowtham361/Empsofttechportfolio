import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  CardActionArea,
  Box
} from "@mui/material";

const Projects = () => {
  const projects = [
    {
      name: "Hospital Management System",
      tech: "React.js | Node.js | PostgreSQL (Sequelize)",
      link: "/projects/hms",
      description:
        "A complete hospital management solution to manage patients, doctors, appointments, and billing efficiently.",
      status: "Ongoing",
    },
    {
      name: "LMS Platform",
      tech: "React.js | Node.js | AWS S3 | PostgreSQL",
      link: "/projects/lms",
      description:
        "An online learning management system to manage trainers, students, courses, and assignment submissions.",
      status: "Ongoing",
    },
    {
      name: "E-commerce Website",
      tech: "React.js | Node.js | Stripe | PostgreSQL",
      link: "/projects/ecommerce",
      description:
        "A multi-vendor e-commerce platform enabling buyers to purchase products and sellers to manage inventory online.",
      status: "Completed",
    },
    {
      name: "Employee Attendance Portal",
      tech: "React.js | Node.js | PostgreSQL | GPS Tracking",
      link: "/projects/attendance",
      description:
        "A portal to manage employee attendance, leaves, clock-in/out, and location-based tracking for HR management.",
      status: "Ongoing",
    },
    {
      name: "Driver Delivery App",
      tech: "React.js | Node.js | OTP Login | Live Tracking",
      link: "/projects/driver-app",
      description:
        "A mobile app for drivers to manage deliveries, track parcels, and enable cashless payments with real-time location tracking.",
      status: "Upcoming",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Ongoing":
        return "primary";
      default:
        return "warning";
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        color="white"
        gutterBottom
        fontWeight="bold"
      >
        Our Projects
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        sx={{ mb: 5, opacity: 0.8 }}
      >
        A glimpse of the solutions we have successfully built and are building
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{width:"30%", height:'20%'}}>
            <Card
              sx={{
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea
                href={project.link}
                sx={{ height: "100%" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {project.tech}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {project.description}
                  </Typography>

                  <Box>
                    <Chip
                      label={project.status}
                      color={getStatusColor(project.status)}
                      size="small"
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
