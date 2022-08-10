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


export default function ChooseSwapItem() {
  const [itemData, setItemData] = useState([]);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [id, setId] = useState('')
  const stored_user_id = localStorage.getItem("shopping-user-id");


//Get data 
useEffect(() => {
  getMyListings(stored_user_id).then((listingsFromApi) => {
    console.log(listingsFromApi)
    setItemData(listingsFromApi);
  });
}, []);

  //Handle lightboxes
  const lightBoxHandler = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.images);
    setTitle(item.item_name)
    setDescription(item.description)
    setSize(item.size)
    setId(item.id)

    console.log(title)

  }

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

  return (
    <Paper sx={style}>
            <Box>
            <Typography> Choose item to swap</Typography>
            <ImageList variant="masonry" cols={2} gap={8} sx={{
            gridTemplateColumns:
            'repeat(auto-fill, minmax(300px, 1fr)!important'
        }}>
            {itemData.map((item, index) => (
            <>
            <ImageListItem key={index} >
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
        <Link to="/messages">
            <Button type="button" variant='contained'>Next</Button>
        </Link>
        </Box>
    </Paper>
  
  );
}
