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
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  //Add heroku endpoint
  const api_url = "https://concept-crew-server.herokuapp.com/auth/register";
  const dev_url = "http://localhost:5050/";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log("submitted");
    const formData = {
      size: size,
      category: category,
      description: description,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    };

    const response = axios.post(dev_url, formData, { headers });
    response.then((res) => {
      console.log(res);
    });
  };

  const handleImage = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    uploadImage(imageUpload, 1, 21).then((downloadURL) => {
      console.log(downloadURL);
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
          <Typography variant="h6" component="h4">
            Add New Item
          </Typography>
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
            </Select>
          </FormControl>
          <FormControl required size="small" sx={{ my: 1 }}>
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
            <Button variant="contained" component="label" onClick={handleImage}>
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
              <PhotoCamera />
            </IconButton>
            <Button type="submit" onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
