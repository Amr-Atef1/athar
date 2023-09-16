import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets";

export const Terms = () => {
  return (
    <>
      <section>
        <Grid container wrap="nowrap">
          <Grid m={{ xs: "1rem", md: "2rem" }} item xs={12} md={6}>
            <Container>
              <Box className="logo" sx={{ marginBottom: "100px" }}>
                <Link to="/">
                  <img src={images.athar} alt="img" width={100} />
                </Link>
              </Box>
              <Box component="ul" sx={{ marginBottom: "32px" }}>
                <Typography style={{margin:"10px 0"}} variant="subtitle2" className="subtitle">
                  Welcome
                </Typography>
                <Typography variant="h4" mb={2}>
                  Terms and Conditions
                </Typography>
                <Box component={"ul"} sx={{ listStyle: "outside" , marginBottom:'2rem' }}>
                  <Typography
                    component="li"
                    sx={{ textJustify: "inter-character" }}
                    variant="body1"
                  >
                    A terms and conditions policy, also known as terms of
                    service or terms of use, is a legal document that is
                    developed to protect the company. It tells your customers
                    what will be legally required of them if they use your
                    service (including websites and mobile apps).
                  </Typography>
                  <Typography component="li" variant="body1">
                    A terms and conditions policy, also known as terms of
                    service or terms of use, is a legal document that is
                    developed to protect the company. It tells your customers
                    what will be legally required of them if they use your
                    service (including websites and mobile apps).
                  </Typography>
                  <Typography component="li" variant="body1">
                    A terms and conditions policy, also known as terms of
                    service or terms of use, is a legal document that is
                    developed to protect the company. It tells your customers
                    what will be legally required of them if they use your
                    service (including websites and mobile apps).
                  </Typography>
                  <Typography component="li" variant="body1">
                    A terms and conditions policy, also known as terms of
                    service or terms of use, is a legal document that is
                    developed to protect the company. It tells your customers
                    what will be legally required of them if they use your
                    service (including websites and mobile apps).
                  </Typography>
                  <Typography component="li" variant="body1">
                    A terms and conditions policy, also known as terms of
                    service or terms of use, is a legal document that is
                    developed to protect the company. It tells your customers
                    what will be legally required of them if they use your
                    service (including websites and mobile apps).
                  </Typography>
                </Box>
                <Link to='/auth/Register'>
                <Button
                    size="large"
                    fullWidth
                    className="default-btn"
                    variant="contained"
                    type="submit"
                  >
                    I agree with this
                  </Button>
                  </Link>
                  <Typography marginTop="1rem" variant="body1" className="p1">
                    Back to
                    <Link to="/auth/SignIn" style={{marginLeft:"5px"}} className="span-component">
                      Sign in
                    </Link>
                  </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid
            item
            md={6}
            className="cover"
            sx={{
              display: { xs: "none", md: "flex" },
              backgroundImage: `url(${images.terms})`,
              backgroundSize: "600px",
            }}
          ></Grid>
        </Grid>
      </section>
    </>
  );
};
