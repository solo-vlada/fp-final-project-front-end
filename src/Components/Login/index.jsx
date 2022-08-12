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
import CloseIcon from '@mui/icons-material/Close';



const style = {
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
    borderRadius: '10px',
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
    // const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [messages, setMessages] = useContext(ApiContext)

    // Add heroku endpoint
    const url = 'https://concept-crew-server.herokuapp.com/auth/login'
    const dev_url = 'http://localhost:5050/auth/login'
    

    const handleSubmit = (e) => {
        e.preventDefault()

      const options = {
        method: 'POST',
        url: url,
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
          navigate('/home')
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
            backgroundColor: '#0098AC',
            borderRadius: '10px',
            border: '2px solid transparent',
            padding: '0.5rem 2rem',
            color: 'white',
            '&:hover': {
              border: '2px solid #0098AC',
              color: '#086788',
            }
          }}>
            Login
        </Button>
        <Modal
          css={{
            zIndex: '100',
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <Typography variant='h5'component="h2" fontFamily="Montserrat" sx={{mb:1}}>
                Login
            </Typography>
            <CloseIcon onClick={handleClose} fontSize='medium' sx={{position:"absolute", top: '10px', right: '15px'}}/>
            <TextField 
            required
            name="username"
            id="username"
            label="Username"
            size='small'
            value={username}
            sx={{my:1}}
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
            sx={{my:1}}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
          />
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
            type="submit">Login</Button>
          </Box>
        </form>
        </Modal>
      </div>
    );
  }
