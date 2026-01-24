import React, { useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  CardActionArea,
  TextField,
  Button,
  Paper,
  Chip
} from "@mui/material";
import { Link } from "react-router-dom";
import {IconButton } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import logo from '../assects/backgroundimage.png';

/* ---------------- Counter ---------------- */
// const Counter = ({ label, value }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const inc = value / 40;
//     const timer = setInterval(() => {
//       start += inc;
//       start >= value ? setCount(value) : setCount(Math.ceil(start));
//       if (start >= value) clearInterval(timer);
//     }, 40);
//     return () => clearInterval(timer);
//   }, [value]);

//   return (
//     <Box textAlign="center">
//       <Typography variant="h4" fontWeight="bold">{count}+</Typography>
//       <Typography color="text.secondary">{label}</Typography>
//     </Box>
//   );
// };

/* ---------------- Scroll Animation ---------------- */
const useFadeUp = () => {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("show"),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
  }, []);
  return ref;
};

const Home = () => {
  const fadeRef = useFadeUp();

  const cardStyle = {
    height: "100%",
    textAlign: "center",
    transition: "0.4s",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: 8,
      "& .icon": {
        filter: "drop-shadow(0 0 10px #1e3c72)"
      }
    }
  };

  const iconStyle = {
    fontSize: 50,
    color: "#1e3c72",
    mb: 1
  };

  const cards = [
    {
      icon: <BusinessIcon />,
      title: "Who We Are",
      text: "Technology-driven software services company.",
      link: "/who-we-are"
    },
    {
      icon: <BuildIcon />,
      title: "What We Do",
      text: "End-to-end IT solutions using modern tech.",
      link: "/what-we-do"
    },
    {
      icon: <WorkHistoryIcon />,
      title: "Our Experience",
      text: "HRMS, LMS & enterprise platforms.",
      link: "/experience"
    },
    {
      icon: <VerifiedIcon />,
      title: "Our Values",
      text: "Quality, innovation & transparency.",
      link: "/values"
    },
    {
      icon: <FlagIcon />,
      title: "Our Mission",
      text: "Deliver reliable & scalable digital solutions.",
      link: "/mission"
    },
    {
      icon: <VisibilityIcon />,
      title: "Our Vision",
      text: "Be a globally trusted technology partner.",
      link: "/vision"
    }
  ];

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
        "AWS Devops Training",
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
    <>
      {/* Home Intro Section */}
      <Container sx={{ py: 7 }} >
        <img src={logo} alt="Logo" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '500px', height: 'auto' }} />
        <Typography variant="h4" align="center" gutterBottom color="white">
          Building Reliable Software Solutions
        </Typography>
        <Typography align="center" color="white">
          Java | Python | DevOps | Testing
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography color="white">
              We specialize in React.js, Node.js, and PostgreSQL-based enterprise applications.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="white">
              Delivering scalable and secure solutions for modern businesses.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ py: 10, }}>
        <Container>
          {/* Heading */}
          <Box textAlign="center" mb={7}>
            <Typography variant="h4" fontWeight="bold" color="white">
              About EMP Softtech Pvt. Ltd.
            </Typography>
            <Typography color="white" maxWidth={700} mx="auto">
              Delivering scalable, secure, and innovative software solutions.
            </Typography>
          </Box>

          {/* Info Cards */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            ref={fadeRef}
            className="fade"
          >
            {cards.map((item, i) => (
              <Grid item xs={12} sm={6} md={6} key={i}>
                <Card sx={cardStyle}>
                  <CardActionArea
                    component={Link}
                    to={item.link}
                    sx={{ height: "100%" }}
                  >
                    <CardContent>
                      <Box className="icon" sx={iconStyle}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Leadership */}
          <Box mt={10} textAlign="center">
            <Typography variant="h5" fontWeight="bold" mb={4} color="white">
              Our Leadership
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {[
                { role: "Chief Executive Officer", name: "Mr. Lokesh Kumar" },
                { role: "Chief Technology Officer", name: "Mr. Vasanth Kumar" },
                { role: "Human Resource Manager", name: "Ms. Sarojini" }
              ].map((leader, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Card sx={cardStyle}>
                    <CardContent>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          mx: "auto",
                          mb: 2,
                          bgcolor: "#1e3c72"
                        }}
                      >
                        {leader.name.charAt(0)}
                      </Avatar>

                      <Typography fontWeight="bold">{leader.name}</Typography>
                      <Typography color="text.secondary">{leader.role}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        EMP Softtech Pvt. Ltd.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{  mt: 6, mb: 10, width:'100%', }}>
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

          <Grid container spacing={1} xs={{ml:3}}sx={{width:'100%'}}>
            {services.map((service, index) => (
              <Grid item xs={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    width: "350px",
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

      {/* Projects Section */}
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
            <Grid item xs={12} sm={6} md={3} key={index} sx={{width:"45%", height:'20%'}}>
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

      {/* Contact Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* Header */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="white">
            Contact Us
          </Typography>
          <Typography color="white">
            Have questions or need assistance? Fill out the form below and we’ll get back to you shortly.
          </Typography>
        </Box>

        {/* Contact Form */}
        <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                placeholder="Enter your name"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                placeholder="Enter your Mail"
              />
            </Grid>

            <Grid item xs={12} sx={{width:'100%'}}>
              <TextField
                fullWidth
                label="Message"
                placeholder="Write your message here..."
                multiline
                rows={4}
                sx={{width:'93%'}}
              />
            </Grid>


          </Grid>
                      <Grid item xs={12} textAlign="center" alignItems="center">
              <Button
                variant="contained"
                size="large"
                sx={{ px: 5, borderRadius: 2, mt: 2 }}
              >
                Send Message
              </Button>
            </Grid>
        </Paper>
      </Container>

      {/* Animations */}
      <style>{`
        .fade {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s;
        }
        .fade.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    <Box display={"flex"}>
      <Box sx={{ gap: 2, mb: 1, ml:"20%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb:3}}>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <LinkedInIcon />
        </IconButton>
        <Typography variant="body2" color="white">LinkedIn profile of the  company</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb:3 }}>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <InstagramIcon />
        </IconButton>
        <Typography variant="body2" color="white">Instagram profile of the  company</Typography>
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
        <Typography variant="body2" color="white">Facebook profile of the company</Typography>
      </Box>
            <Box sx={{mt:5,}}>
      <Typography variant="body2" color="white" sx={{mb:4}}>Contact : </Typography>
      <Typography variant="body2" color="white">Email : hr@empsoftetch.com</Typography>
      </Box>

      </Box>


    </Box>
    </>
  );
};

export default Home;
