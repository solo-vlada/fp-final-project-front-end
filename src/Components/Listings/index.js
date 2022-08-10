// import React, { useEffect, useState } from "react";
// import { getAllListings } from "../../utils/api";
// import { Link } from "react-router-dom";
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

// export default function Listings() {
//   // const [listings, setListings] = useState([]);

//   // useEffect(() => {
//   //   getAllListings().then((listingsFromApi) => {
//   //     setListings(listingsFromApi);
//   //   });
//   // }, []);

//   return (
//     // <div>
//     //   <h1>All listings</h1>
//     //   {/* <ul className="all-listings"> */}
//     //     {listings.map((listing) => {
//     //       return (
//     //         // <Link key={listing.id} to={`/home/${listing.id}`}>
//     //         //   <li key={listing.id} className="listings">
//     //         //     <img src={listing.images} />
//     //         //     <p>Name: {listing.item_name}</p>
//     //         //     <p>Description: {listing.description}</p>
//     //         //     <p>Category: {listing.category}</p>
//     //         //     <p>Size: {listing.size}</p>
//     //         //   </li>
//     //         // </Link>

//     //       );
//     //     })}
//     //   {/* </ul> */}
//     // </div>
//     <Box sx={{width: 300, height: 450, overflowY: 'scroll'}}>
//         <ImageList variant="masonry" cols={2} gap={8}>
//           {itemData.map((listing) =>{
//             <ImageListItem key={listing.img}>
//               <img 
//                src={`${listing.img}?w=248&fit=crop&auto=format`}
//                srcSet={`${listing.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                alt={listing.title}
//                loading="lazy"
//             />
//             <ImageListItemBar position="below" title={listing.title} />
            
//             </ImageListItem>
//           })}
//         </ImageList>
//     </Box>

//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//     author: 'swabdesign',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//     author: 'Pavel Nekoranec',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//     author: 'Charles Deluvio',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//     author: 'Christian Mackie',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//     author: 'Darren Richardson',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//     author: 'Taylor Simpson',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//     author: 'Ben Kolde',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//     author: 'Philipp Berndt',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//     author: 'Jen P.',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//     author: 'Douglas Sheppard',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//     author: 'Fi Bell',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//     author: 'Hutomo Abrianto',
//   },
// ];

import React, {useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container'
import Lightbox from '../Lightbox';


export default function Listings() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //Handle lightboxes
  const lightBoxHandler = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
    setTitle(item.title)
    setDescription(item.description)
  }

  const handleRotationRight= () => {
    const totalLength = itemData.length;
    if(currentIndex +1 >= totalLength){
      setCurrentIndex(0)
      const newUrl= itemData[0].img;
      setClickedImg(newUrl)
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = itemData.filter((item) => {
      return itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  const handleRotationLeft = () => {
    const totalLength = itemData.length;
    if(currentIndex === 0){
      setCurrentIndex(totalLength-1);
      const newUrl = itemData[totalLength -1].img;
      setClickedImg(newUrl)
    }
    const newIndex = currentIndex - 1;
    const newUrl = itemData.filter((item) => {
      return itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
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
              src={item.img}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                lightBoxHandler(item, index)
              }}
            />
          <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>

          </>

        ))}
        {clickedImg && <Lightbox clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handleRotationLeft={handleRotationLeft} title={title} description={description} />}
      </ImageList>
    </Container>
  
  );
}

const itemData = [
  {
    id:1, 
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    author: 'swabdesign',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    id:2, 
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    id:3, 
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    id:4, 
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    id:5, 
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
  },
  {
    id:6, 
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    id:7, 
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    id:8, 
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    id:9, 
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    id:10, 
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    id:11, 
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    id:12, 
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];
