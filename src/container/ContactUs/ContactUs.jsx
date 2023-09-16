import React, { useEffect } from "react";
import "./ContactUs.css";
import images from "../../assets";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "../../api/axios";
import { Mail } from "@mui/icons-material";
export const ContactUs = () => {

  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const pattern = /^[A-Za-z\s]+$/;
  
  const onSubmit = async (data) => {
    const { email, name, multiline } = data;
    console.log(email, name, multiline);
    try {

      const response = await axios.post(
        "/api/contact-us",
        {
          email: email,
          full_name: name,
          message: multiline,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      // Response from the server
    } catch (error) {
      console.error("this is the error" + error); // Handle errors
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="app__contact app__wrapper section-padding" id="contact">
      <div className="app__wrapper_info">
        <h1 className="app__subheader"> contact us</h1>
        <form
          style={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input type="hidden" name="_token" value="{{ csrf_token() }}"></input>
          <Box
            display="flex"
            gap="2rem"
            flexDirection={{ xs: "column", md: "row" }}
            maxWidth={"100%"}
          >
            <Box sx={{ flex: 1 }}>
              <label htmlFor="name">Name</label>
              <TextField
                placeholder="Ex:Mohammed Elsherif"
                fullWidth
                id="name"
                {...register("name", {
                  required: "name is required",
                })}
                error={errors.name}
                helperText={errors.name?.message}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <label htmlFor="email">Email Address</label>
              <TextField
                placeholder="Ex:Mohammed Elsherif@gmail.com"
                fullWidth
                id="email"
                {...register("email", {
                  required: "email is required",
                })}
                error={errors.email}
                helperText={errors.email?.message}
              />
            </Box>
          </Box>
          <Box>
            <label htmlFor="outlined-multiline-static">Your message</label>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={8}
              placeholder="Ex: i would like to communicate with you"
              {...register("multiline", {
                required: "text is required",
                validate: (value) => {
                  if (!pattern.test(value)) {
                    return 'Invalid text format';
                  }
                  if (value.length < 2 || value.length > 255) {
                    return 'Text must be between 2 and 255 characters long';
                  }
                  return true; // Validation passed
                },
              })}
              error={errors.multiline}
              helperText={errors.multiline?.message}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              maxWidth: "200px",
              margin: "15px 0",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "var(--main-color) !important",
            }}
          >
            <Typography sx={{ flex: 2 }}>send</Typography>
            <Mail sx={{ flex: 1 }} />
          </Button>
        </form>
      </div>
      <div className="app__wrapper_img">
        <img src={images.contact} alt="contact" />
      </div>
    </div>
  );
};
