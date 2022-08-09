import React, { useState } from 'react';
import axios from 'axios';

//MATERIAL UI
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const style = {
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function AddNewItem() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [description, setDescription] = useState('')
    const [size, setSize] = useState('')
    const[category, setCategory] = useState('')
    
    //Add heroku endpoint 
    const url = ''


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const resp = await axios.post(url, {username: username, email: email, password: password, location: location});
    //         console.log(resp.data);
    //         } catch(error) {
    //             console.log(error.response)
    //         }  
    // }
  
    return (
        <>
        <Button onClick={handleOpen} ><AddCircleIcon fontSize="large" /></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form">
            <Typography variant='h6' component="h4">
                Add New Item
            </Typography>
             <FormControl required size='small'  sx={{ my:1 }}>
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
            <FormControl rquired size='small' sx={{ my:1}}>
              <InputLabel required htmlFor="demo-dialog-native">Size</InputLabel>
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
                    size='small'
                    sx={{my:1}}
                    onChange={(e) => setDescription(e.target.value)}
            />
            </FormControl>
            <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            mt:1
            }}>
                <Button type="submit" variant='contained' >Add image</Button>
                <Button type="submit" variant='contained'>Submit</Button>
            </Box>
          </Box>
        </Modal>
        </>
    );
  }
