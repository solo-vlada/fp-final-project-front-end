import React, { useState, useEffect } from "react";
import { getMyListings } from "../../utils/api";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { PersonalLightbox } from "../../Components";
import "./myListingsComp.css";

export default function MyListingsComp() {
  const [itemData, setItemData] = useState([]);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [id, setId] = useState("");
  const [filter, setFilter] = useState("");
  const stored_user_id = localStorage.getItem("shopping-user-id");

  //Get data
  useEffect(() => {
    getMyListings(stored_user_id, filter).then((listingsFromApi) => {
      console.log(listingsFromApi);
      setItemData(listingsFromApi);
    });
  }, [filter]);

  //Handle lightboxes
  const lightBoxHandler = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.images);
    setTitle(item.item_name);
    setDescription(item.description);
    setSize(item.size);
    setId(item.id);
  };

  const handleRotationRight = () => {
    const totalLength = itemData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = itemData[0].images;
      const newTitle = itemData[0].item_name;
      const newDescription = itemData[0].description;
      const newSize = itemData[0].size;
      setClickedImg(newUrl);
      setTitle(newTitle);
      setDescription(newDescription);
      setSize(newSize);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = itemData.filter((item) => {
      return itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].images;
    const newTitle = newUrl[0].item_name;
    const newDescription = newUrl[0].description;
    const newSize = newUrl[0].size;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
    setTitle(newTitle);
    setDescription(newDescription);
    setSize(newSize);
  };

  const handleRotationLeft = () => {
    const totalLength = itemData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = itemData[totalLength - 1].images;
      const newTitle = itemData[totalLength - 1].item_name;
      const newDescription = itemData[totalLength - 1].description;
      const newSize = itemData[totalLength - 1].size;
      setClickedImg(newUrl);
      setTitle(newTitle);
      setDescription(newDescription);
      setSize(newSize);
    }
    const newIndex = currentIndex - 1;
    const newUrl = itemData.filter((item) => {
      return itemData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].images;
    const newTitle = newUrl[0].item_name;
    const newDescription = newUrl[0].description;
    const newSize = newUrl[0].size;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
    setTitle(newTitle);
    setDescription(newDescription);
    setSize(newSize);
  };

  return (
    <Container maxWidth="small" sx={{ overflowY: "scroll", my: 5 }}>
      <div className="filter">
        <FormControl required size="small" sx={{ my: 1 }}>
          <InputLabel htmlFor="demo-dialog-native">Filter</InputLabel>
          <Select
            native
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            input={<OutlinedInput label="Filter" id="demo-dialog-native" />}
          >
            <option aria-label="None" value="" />
            <option value={"shirt"}>Shirt</option>
            <option value={"skirt"}>Skirt</option>
            <option value={"dress"}>Dress</option>
            <option value={"pants"}>Pants</option>
          </Select>
        </FormControl>
      </div>
      <ImageList
        variant="masonry"
        cols={2}
        gap={8}
        sx={{
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)!important",
        }}
      >
        {itemData.map((item, index) => (
          <>
            <ImageListItem key={index}>
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
        {clickedImg && (
          <PersonalLightbox
            clickedImg={clickedImg}
            handleRotationRight={handleRotationRight}
            setClickedImg={setClickedImg}
            handleRotationLeft={handleRotationLeft}
            title={title}
            description={description}
            size={size}
            listingId={id}
          />
        )}
      </ImageList>
    </Container>
  );
}
