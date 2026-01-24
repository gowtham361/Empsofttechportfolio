import React, {useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  CardActionArea
} from "@mui/material";
import { Link } from "react-router-dom";

import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

/* ---------------- About ---------------- */
const About = () => {
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
      link: "/about/who-we-are"
    },
    {
      icon: <BuildIcon />,
      title: "What We Do",
      text: "End-to-end IT solutions using modern tech.",
      link: "/about/what-we-do"
    },
    {
      icon: <WorkHistoryIcon />,
      title: "Our Experience",
      text: "HRMS, LMS & enterprise platforms.",
      link: "/about/Our-experience"
    },
    {
      icon: <VerifiedIcon />,
      title: "Our Values",
      text: "Quality, innovation & transparency.",
      link: "/about/Our-values"
    },
    {
      icon: <FlagIcon />,
      title: "Our Mission",
      text: "Deliver reliable & scalable digital solutions.",
      link: "/about/Our-mission"
    },
    {
      icon: <VisibilityIcon />,
      title: "Our Vision",
      text: "Be a globally trusted technology partner.",
      link: "/about/Our-vision"
    }
  ];

  return (
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
    </Box>
  );
};

export default About;
