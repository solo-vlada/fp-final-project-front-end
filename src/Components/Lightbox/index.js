import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

export default function Lightbox({clickedImg, handleRotationRight, setClickedImg, handleRotationLeft}) {

    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return (
    <>
        <div className="dismiss">
            <CloseIcon fontSize="large" className="dismiss" onClick={handleClick}/>
            <div >
                <ArrowForwardIosIcon fontSize="large" onClick={handleRotationRight} />
            </div>
            <div>
                <ArrowBackIosIcon fontSize="large" onClick={handleRotationLeft}/>
            </div>
            <img width="200px" src={clickedImg} alt="bigger picture"/>
        </div>

    </>)

}
