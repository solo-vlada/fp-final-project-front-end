import React from "react";
import { MyListingsComp, BottomNav } from "../../Components";
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

function MyListings() {
  return (
    <Container maxWidth='sm'>
            <Typography component={"h1"} variant={'h4'} align="center" marginY= '20px' fontFamily="Montserrat">Items available in your area</Typography>
      <MyListingsComp />
      <BottomNav />
    </Container>
  );
}

export default MyListings;
