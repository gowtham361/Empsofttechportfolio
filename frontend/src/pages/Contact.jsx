import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Box
} from "@mui/material";

const Contact = () => (
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

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            placeholder="Write your message here..."
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12} textAlign="center" alignItems="center">
          <Button
            variant="contained"
            size="large"
            sx={{ px: 5, borderRadius: 2 }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </Container>
);

export default Contact;
