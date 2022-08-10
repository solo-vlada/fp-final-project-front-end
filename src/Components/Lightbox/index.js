import Box from "@mui/material/Box"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { Paper, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';



const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Lightbox({clickedImg, handleRotationRight, setClickedImg, handleRotationLeft, title, description}) {

    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return (
    <>
     <Paper sx={style} className="dismiss">
        <Box sx={{display:"flex", alignItems: "center", position:"relative"}}>
            <ArrowBackIosIcon sx={{ mr:1}} fontSize="large" onClick={handleRotationLeft}/>
            <Box>
                <img width="250px"  src={clickedImg} alt="bigger picture"/>
                <Typography component="h4" variant="h6" sx={{ mt:1}} >{title}</Typography>
                <Typography sx={{width: "250px", mt:1}}>{description}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt:2}}>
                    <FavoriteIcon fontSize="large" />
                    <ChatBubbleIcon fontSize="large" />
                </Box>

            </Box>
            <ArrowForwardIosIcon  sx={{ ml:1}}fontSize="large" onClick={handleRotationRight} />
        </Box>
            <CloseIcon sx={{position:"absolute", top: '-50px', right: '15px'}}fontSize="large" className="dismiss" onClick={handleClick}/>
        </Paper>
        
    </>)

}
