/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext, useState } from 'react';
import axios from 'axios';

//MATERIAL UI 
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField"
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../ApiContext';



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
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [messages, setMessages] = useContext(ApiContext)

    // Add heroku endpoint
    const url = 'https://concept-crew-server.herokuapp.com/auth/login'
    const dev_url = 'http://localhost:5050/auth/login'
    


    const handleSubmit = (e) => {
        e.preventDefault()

      const options = {
        method: 'POST',
<<<<<<< HEAD:src/Components/Login/index.jsx
        url: 'https://concept-crew-server.herokuapp.com/auth/login',
=======
        url: url,
>>>>>>> b1e0111df393b38ffd0f65ac422f6e61ad78cad4:src/Components/Login/index.js
        auth: { username: username, password: password },
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Basic c2lnbDoxMjM0'
        },
        data: {}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data)
        window.localStorage.setItem('shopping-access-token', response.data.token[0]);
        window.localStorage.setItem('shopping-user-id', response.data.token[1].user_id);
        window.localStorage.setItem('shopping-username', response.data.token[1].username);
        if (response.status === 200) {
          navigate('/mylistings')
        }
      }).catch(function (error) {
        console.error(error);
      });
      
    }

    return (
      <div>
        <Button 
          onClick={handleOpen}
          css={{
            width: '150px',
            backgroundColor: '#086788',
            borderRadius: '10px',
            border: '2px solid transparent',
            padding: '0.5rem 2rem',
            color: 'white',
            '&:hover': {
              border: '2px solid #086788',
              color: '#086788',
            }
          }}>
            Login
        </Button>
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
            value={username}
            sx={{mb:1}}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
          />
            <TextField
            id="password"
            name="password"
            required
            label="Password"
            type="password"
            size='small'
            value={password}
            sx={{mb:1}}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
          />
          {/* <TextField
            id="email"
            name="email"
            required
            label="Email"
            type="email"
            size='small'
            value={email}
            sx={{mb:1}}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
          /> */}
          <Button type="submit" variant='contained'>Login</Button>
          </Box>
        </form>
        </Modal>
      </div>
    );
  }
