import React, {useState, useEffect} from 'react';
import { getMyListings } from "../../utils/api";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container'
import {PersonalLightbox} from "../../Components"
import Paper from "@mui/material/Paper"
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"
import {Link } from 'react-router-dom'
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';


export default function SwapItem({receiverId, receiverItemId}) {
  const [itemData, setItemData] = useState([]);
  const [clickedImg, setClickedImg] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);
    const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [size, setSize] = useState('');
  const [id, setId] = useState('')
  const stored_user_id = localStorage.getItem("shopping-user-id");
  const navigate = useNavigate();
  const api_url = "https://concept-crew-server.herokuapp.com/auth/create-swap";

  const clientTokens = localStorage.getItem("shopping-access-token");

//Get data 
useEffect(() => {
  getMyListings(stored_user_id).then((listingsFromApi) => {
    console.log(listingsFromApi)
    setItemData(listingsFromApi);
  });
}, []);

  //Handle lightboxes
  const lightBoxHandler = (item, index) => {
    // setCurrentIndex(index);
    // setClickedImg(item.images);
    setTitle(item.item_name)
    // setDescription(item.description)
    // setSize(item.size)
    setId(item.id)
    setClickedImg(true)

  }


  function handleSubmit (e) {
        e.preventDefault();
        const options = {
            method: "POST",
            url: api_url,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-access-tokens": clientTokens,
            },
            data: {
                proposer_item_id: id,
                receiver_item_id: receiverItemId,
                receiver: receiverId
            },
          };
          console.log(options.data);
          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
            navigate("/messages/inbox")
  }


const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 30,
    p: 4,
  };


  return (
    <>
      <Paper 
      sx={style}>
          <Box sx={{display: "flex", flexDirection:'column'}}>
            <Box>
            <Typography sx={{mb:2, ml:3, alignSelf: 'center', p:1,fontFamily:"Montserrat"}} component='h4' variant='h6'> Choose item to swap</Typography>
            <CloseIcon fontSize='medium' sx={{position:"absolute", top: '10px', right: '15px'}}/>
            </Box>
            <ImageList variant="masonry" cols={2} gap={10} sx={{ m:1, 
            gridTemplateColumns:
            'repeat(auto-fill, minmax(300px, 1fr)!important'
        }}>
            {itemData.map((item, index) => (
            <>
             <ImageListItem
                 sx = 
                 {{
                  width:"130px" ,
                  }} key={index} >
                <img
                
                key={item.id}
                src={`${item.images}?w=248&fit=crop&auto=format`}
                srcSet={`${item.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.item_name}
                loading="lazy"
                onClick={() => {
                    lightBoxHandler(item, index);
                }}
                />
            <ImageListItemBar position="below" title={item.item_name} />
            </ImageListItem>
            </>
            ))}
        </ImageList>
        <Button sx={{
            width: '150px',
            // backgroundColor: '#086788',
            backgroundColor:'#0098AC',
            fontFamily:"Montserrat",
            alignSelf: 'center',
            borderRadius: '10px',
            border: '2px solid transparent',
            padding: '0.5rem 2rem',
            margin: 1,
            color: 'white',
            '&:hover': {
              border: '2px solid #0098AC',
              color: '#086788',
            }
          }} onClick={handleSubmit}>Next</Button>
        </Box>
    </Paper>
  </>
  );
}
