import React, { useState } from "react";
import { uploadImage } from "../../utils/firebase";
import axios from "axios";

//MATERIAL UI
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddNewItem() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState("");
  const [itemName, setItemName] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageURL, setimageURL] = useState("");

  //Add heroku endpoint
  const api_url = "https://concept-crew-server.herokuapp.com/auth/new-listing";
  const dev_url = "http://localhost:5050/clothing";

  const stored_user_id = localStorage.getItem("shopping-user-id");
  const clientTokens = localStorage.getItem("shopping-access-token");

  const handleSubmit = (e) => {
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
        item_name: itemName,
        item_size: size,
        item_cat: category,
        item_desc: description,
        item_user_id: stored_user_id,
        item_images: imageURL,
      },
    };
    console.log(options.data);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        handleClose();
      })
      .catch(function (error) {
        console.error(error);
      });
    setDescription("");
    setItemName("");
    setSize("");
    setCategory("");
    console.log(options.data)
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        handleClose();
      })
      .catch(function (error) {
        console.error(error);
      });
    setDescription("");
    setItemName("");
    setSize("");
    setCategory("");
  };
  

  const handleImage = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    uploadImage(imageUpload, stored_user_id, itemName).then((downloadURL) => {
      console.log(downloadURL);
      console.log(stored_user_id);
      setimageURL(downloadURL);
    });

    console.log(imageUpload);
  };

  return (
    <>
      <AddCircleIcon onClick={handleOpen} fontSize="large" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <Typography variant="h6" component="h4" sx={{fontFamily:"Montserrat"}}>
            Add New Item
          </Typography>
          <CloseIcon onClick={handleClose} fontSize='medium' sx={{position:"absolute", top: '15px', right: '15px'}}/>
          <FormControl>
            <TextField
              id="item_name"
              name="item_name"
              label="Item name"
              value={itemName}
              size="small"
              sx={{ my: 1 }}
              onChange={(e) => setItemName(e.target.value)}
            />
          </FormControl>
          <FormControl required size="small" sx={{ my: 1 }}>
            <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
            <Select
              native
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              input={<OutlinedInput label="Category" id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={"shirt"}>Shirt</option>
              <option value={"skirt"}>Skirt</option>
              <option value={"dress"}>Dress</option>
              <option value={"jeans"}>Jeans</option>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ my: 1 }}>
            <InputLabel required htmlFor="demo-dialog-native">
              Size
            </InputLabel>
            <Select
              native
              value={size}
              onChange={(e) => setSize(e.target.value)}
              input={<OutlinedInput label="Size" id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={"small"}>Small</option>
              <option value={"medium"}>Medium</option>
              <option value={"large"}>Large</option>
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              id="description"
              name="description"
              label="Description"
              value={description}
              multiline
              maxRows={3}
              size="small"
              sx={{ my: 1 }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: 1,
            }}
          >
            {/* <Button type="submit" variant="contained">
              Add image
            </Button> */}
            <Button
          sx={{
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
          }}           
             component="label" onClick={handleImage}>
              Upload
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
              <PhotoCamera  sx={{color: '#0098AC' }}/>
            </IconButton>
            <Button
                      sx={{
                        width: 'auto',
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
                      }}
            type="submit" onClick={handleSubmit} >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
