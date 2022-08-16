import React from "react";

import styled from "styled-components";

import { Grid, Box, Typography } from "@mui/material";

const Style = styled.div`
  .container {
    background-color: white;
    width: 100%;
    height: 200px;
    margin-top: 250px;
  }
  .div1 {
    display: flex;
    margin-left: 160px;
    font-family: sans-serif;
    fint-weight: bold;
    line-height: 20px;
    word-spacing: 7px;
  }
  .div2 {
    display: flex;
    margin-left: 164px;
    margin-top: 10px;
    font-family: sans-serif;
    fint-weight: bold;
    line-height: 22px;
    word-spacing: 14px;
  }
  .hr {
    width: 1170px;
    justify-content: center;
    margin-top: -142px;
    margin-left: 164px;
  }
`;

const Footer = () => {
  return (
    // <Grid
    //   container
    //   sx={{
    //     backgroundColor: "white",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <Grid item md={9} display="flex" mr="10px">
    //     <Box
    //       sx={{ display: { md: "flex", xs: "none" }, marginRight: "2.5rem" }}
    //       fontSize="1.5rem"
    //       width="70%"
    //       display="flex"
    //       flexDirection="row"
    //       alignItems="center"
    //     >
    //       <Typography
    //         sx={{
    //           mt: "-130px",
    //           font: "Poppins",
    //           fontWeight: "bold",
    //           fontSize: "10px",
    //           width: "80%",
    //           textAlign: "center",
    //           marginLeft: { md: "40px", xs: "0px" },
    //           height: "26px",
    //           color: "black",
    //         }}
    //       >
    //         Sign Up Log In Messenger Facebook Lite Watch Places Games
    //         Marketplace Facebook Pay Oculus Portal Instagram Bulletin Local
    //         Fundraisers Services Voting Information Centre Groups About Create
    //         ad Create Page Developers Careers Privacy Cookies AdChoices Terms
    //         Help Contact uploading and non-users
    //       </Typography>
    //     </Box>
    //   </Grid>
    // </Grid>

    <Style>
      <div className="container">
        <div className="div1">
          English (UK) Hausa Français (France) Português (Brasil) Español
          العربية Bahasa Indonesia Deutsch 日本語 Italiano हिन्दी
        </div>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="div2">
        Sign Up Log In Messenger Facebook Lite Watch Places Games Marketplace
        Facebook Pay Oculus Portal Instagram Bulletin Local Fundraisers Services
        Voting Information Centre Groups About Create ad Create Page Developers
        Careers Privacy Cookies AdChoices Terms Help Contact uploading and
        non-users
      </div>
    </Style>
  );
};

export default Footer;
