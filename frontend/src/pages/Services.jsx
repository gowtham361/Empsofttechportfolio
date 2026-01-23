import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We design and develop robust, scalable, and secure software solutions tailored to your business requirements.",
    points: [
      "Enterprise applications",
      "Web & mobile applications",
      "SaaS product development",
      "API & third-party integrations"
    ]
  },
  {
    title: "Web Development",
    description:
      "We create modern, responsive, and high-performance websites that deliver exceptional user experiences.",
    points: [
      "React.js, Next.js, Astro",
      "Node.js backend development",
      "UI/UX optimization",
      "SEO-friendly architecture"
    ]
  },
  {
    title: "Mobile Application Development",
    description:
      "We build feature-rich, secure, and user-friendly mobile applications for all platforms.",
    points: [
      "Android & iOS apps",
      "Cross-platform development",
      "Real-time notifications",
      "Secure payment integration"
    ]
  },
  {
    title: "Backend & Database Solutions",
    description:
      "High-performance, scalable, and secure backend systems to power your applications.",
    points: [
      "Node.js & Express.js",
      "PostgreSQL & MySQL",
      "Sequelize ORM",
      "Cloud-ready architecture"
    ]
  },
  {
    title: "Cloud & DevOps Services",
    description:
      "We help deploy, manage, and scale applications using modern cloud and DevOps practices.",
    points: [
      "AWS cloud deployment",
      "CI/CD pipelines",
      "Server optimization",
      "Application monitoring"
    ]
  },
  {
    title: "Maintenance & Support",
    description:
      "Reliable ongoing support to keep your applications secure and up-to-date.",
    points: [
      "Bug fixing",
      "Performance tuning",
      "Security updates",
      "24/7 technical support"
    ]
  },
    {
    title: "Training",
    description:
      "Providing a training to all the students based on the IT sectors.",
    points: [
      "Java Training",
      "Python Training",
      "Deveops Training",
      "Testing Training"
    ]
  },
    {
    title: "Internships",
    description:
      "Reliable ongoing support to keep your applications secure and up-to-date.",
    points: [
      "Java Projects ",
      "Python Projects",
      "Devops Projects",
      "Testing Projects"
    ]
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 2, mt: 6, mb: 10}}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          Our Services
        </Typography>

        <Typography
          align="center"
          sx={{ color: "#cbd5e1", mb: 6, maxWidth: 700, mx: "auto" }}
        >
          We deliver innovative, scalable, and reliable technology solutions
          tailored to meet your business needs.
        </Typography>

        <Grid container spacing={1} sx={{width:'100%'}}>
          {services.map((service, index) => (
            <Grid item xs={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  width: "250px",
                  backgroundColor: "#1e293b",
                  color: "#fff",
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.4)",

                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "#94a3b8", mb: 2 }}
                  >
                    {service.description}
                  </Typography>

                  <ul style={{ paddingLeft: 18 }}>
                    {service.points.map((point, idx) => (
                      <li key={idx} style={{ marginBottom: 6 }}>
                        <Typography variant="body2">
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
