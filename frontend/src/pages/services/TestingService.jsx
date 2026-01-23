import React from "react";
import { Container, Typography } from "@mui/material";

const TestingService = () => (
  <Container sx={{ py: 6 }}>
    <Typography variant="h4" gutterBottom>
      Software Testing
    </Typography>
    <Typography color="text.secondary">
      Manual, automation, performance, and security testing to ensure defect-free
      and reliable software.
    </Typography>
  </Container>
);

export default TestingService;
