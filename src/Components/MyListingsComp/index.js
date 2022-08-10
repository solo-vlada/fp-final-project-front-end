import React, {useState, useEffect} from 'react';
import { getMyListings } from "../../utils/api";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container'
import Lightbox from '../Lightbox';


export default function MyListingsComp() {
  const [itemData, setItemData] = useState([]);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const stored_user_id = localStorage.getItem("shopping-user-id");
  console.log(stored_user_id)
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
  }

  const handleRotationRight= () => {
    const totalLength = itemData.length;
    if(currentIndex +1 >= totalLength){
      setCurrentIndex(0)
      const newUrl= itemData[0].images;
      setClickedImg(newUrl)
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = itemData.filter((item) => {
      return itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].images;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  const handleRotationLeft = () => {
    const totalLength = itemData.length;
    if(currentIndex === 0){
      setCurrentIndex(totalLength-1);
      const newUrl = itemData[totalLength -1].images;
      setClickedImg(newUrl)
    }
    const newIndex = currentIndex - 1;
    const newUrl = itemData.filter((item) => {
      return itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].images;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  return (
    <Container maxWidth="small" sx={{ overflowY: 'scroll', my:5 }}>
      <ImageList variant="masonry" cols={2} gap={8} sx={{
        gridTemplateColumns:
        'repeat(auto-fill, minmax(280px, 1fr)!important'
      }}>
        {itemData.map((item, index) => (
          <>
          <ImageListItem key={index} >
            <img
              key={item.id}
              src={item.images}
              srcSet={`${item.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.item_name}
              loading="lazy"
              onClick={() => {
                lightBoxHandler(item, index)
              }}
            />
          <ImageListItemBar position="below" title={item.item_name} />
          </ImageListItem>

          </>

        ))}
        {clickedImg && <Lightbox clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handleRotationLeft={handleRotationLeft} title={title} description={description} />}
      </ImageList>
    </Container>
  
  );
}
