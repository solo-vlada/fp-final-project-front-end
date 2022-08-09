import React, { useState } from 'react';
import axios from 'axios';

//MATERIAL UI 
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField"


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
  
  export default function Login() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    // Add heroku endpoint
    const url = 'https://concept-crew-server.herokuapp.com/'
    
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
        const resp = await axios.post(url, {username: username, email: email, password: password});
        console.log(username, email, password);
        console.log(resp.data);
        } catch(error) {
            console.log(error.response)
        }
    }

    return (
      <div>
        <Button onClick={handleOpen}>Login</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <Typography variant='h6' component="h4" sx={{mb:1}}>
                Login
            </Typography>
            <TextField 
            required
            name="username"
            id="username"
            label="Username"
            size='small'
            sx={{mb:1}}
            onChange={handleUsername}
          />
            <TextField
            id="password"
            name="password"
            required
            label="Password"
            type="password"
            size='small'
            sx={{mb:1}}
            onChange={handlePassword}
          />
          <TextField
            id="email"
            name="email"
            required
            label="Email"
            type="email"
            size='small'
            sx={{mb:1}}
            onChange={handleEmail}
          />
          <Button type="submit" variant='contained'>Login</Button>
          </Box>
        </form>
        </Modal>
      </div>
    );
  }
