import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { SwapItem } from "..";
import { useState } from "react";

const style = {
  position: "absolute",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Lightbox({
  clickedImg,
  handleRotationRight,
  setClickedImg,
  handleRotationLeft,
  title,
  description,
  size,
  receiverItemId,
  receiverId,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  const handleSwap = () => {
    setIsVisible(true);
    setIsShown(false);
    console.log(isVisible);
  };
  return (
    <>
      {isShown && (
        <Paper sx={style} className="dismiss">
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <ArrowBackIosIcon
              sx={{ mr: 1 }}
              fontSize="large"
              onClick={handleRotationLeft}
            />
            <Box>
              <img width="220px" src={clickedImg} alt="bigger picture" />
              <Typography component="h4" variant="h6" sx={{ mt: 1 }}>
                {title}
              </Typography>
              <Typography sx={{ width: "200px", mt: 1 }}>
                {description}
              </Typography>
              <Typography sx={{ mt: 1 }}>{size}</Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
              >
                <Button
                  className="dismiss"
                  type="submit"
                  onClick={handleSwap}
                  sx={{
                    width: "150px",
                    backgroundColor: "#0098AC",
                    fontFamily: "Montserrat",
                    alignSelf: "center",
                    borderRadius: "10px",
                    border: "2px solid transparent",
                    padding: "0.5rem 2rem",
                    margin: 1,
                    color: "white",
                    "&:hover": {
                      border: "2px solid #0098AC",
                      color: "#086788",
                    },
                  }}
                >
                  Swap
                </Button>
              </Box>
            </Box>
            <ArrowForwardIosIcon
              sx={{ ml: 1 }}
              fontSize="large"
              onClick={handleRotationRight}
            />
          </Box>
          <CloseIcon
            sx={{ position: "absolute", top: "10px", right: "15px" }}
            fontSize="large"
            className="dismiss"
            onClick={handleClick}
          />
        </Paper>
      )}
      {isVisible && (
        <SwapItem receiverId={receiverId} receiverItemId={receiverItemId} />
      )}
    </>
  );
}
