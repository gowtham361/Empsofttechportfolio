import React from "react";
import { Container, Typography } from "@mui/material";

const DevOpsService = () => (
  <Container sx={{ py: 6 }}>
    <Typography variant="h4" gutterBottom>
      DevOps Services
    </Typography>
    <Typography color="text.secondary">
      We streamline development and deployment using CI/CD pipelines, Docker,
      Kubernetes, AWS, and monitoring tools.
    </Typography>
  </Container>
);

export default DevOpsService;
