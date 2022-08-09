import { Container, Typography } from "@mui/material";
import React from "react";
import {Listings, BottomNav} from "../../Components";

function HomePage() {
  return (
    <Container >
      <Typography component={"h1"} variant={'h4'} align="center" marginY= '10px'>Items available in your area</Typography>
      <Listings />
      <BottomNav />
    </Container>
  );
}

export default HomePage;

