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
  
  export default function Register() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    
    //Add heroku endpoint 
    const api_url = 'https://concept-crew-server.herokuapp.com/auth/register'


    const handleSubmit = async (e) => {
        e.preventDefault()
        const registerData = {username: username, email: email, password: password, location: location}
        console.log(registerData) 
        // const options = {

        //   headers: {
        //     "content-type": "application/json",
        //     "Access-Control-Allow-Origin": "*"

        //   }

        // }
        try {
            //const registerData = {username: username, email: email, password: password, location: location}
            const resp = await axios.post({
              url: api_url,
              data: registerData,
              headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Requested-With": "XMLHttpRequest"
    
              }
            });
            console.log(resp.data);
            } catch(error) {
                console.log(error.response)
            }  
            // axios({
            //   method: 'post',
            //   url: '/user/12345',
            //   data: {
            //     firstName: 'Fred',
            //     lastName: 'Flintstone'
            //   }
           // });
    }
  
    return (
        <>
        <Button onClick={handleOpen} sx={{mb:1}}>Register</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form">
            <Typography variant='h6' component="h4">
                Register
            </Typography>
            <TextField 
            required
            id="username"
            name="username"
            label="Username"
            size='small'
            sx={{mb:1}}
            onChange={(e) => setUsername(e.target.value)}
          />
            <TextField
            id="password"
            required
            name="password"
            label="Password"
            type="password"
            size='small'
            sx={{mb:1}}
            onChange={(e) => setPassword(e.target.value)}
          />
            <TextField
            id="repeatPassword"
            name="repeatPassword"
            required
            label="Re-type Password"
            type="password"
            size='small'
            sx={{mb:1}}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <TextField
            id="email"
            name="email"
            required
            label="Email"
            type="email"
            size='small'
            sx={{mb:1}}
            onChange={(e) => setEmail(e.target.value)}
          />
            <TextField
            id="location"
            name="location"
            required
            label="Location"
            size='small'
            sx={{mb:1}}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button type='button' variant='contained' onClick={handleSubmit}>Register</Button>
          </Box>
        </Modal>
        </>
    );
  }
