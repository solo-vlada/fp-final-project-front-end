/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react'
import { TextField,Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

export default function SendMessage(offer_id) {
    const [messageText, setMessageText] = useState('');
    const sender_id = localStorage.getItem('shopping-user-id');
    const access_token = localStorage.getItem('shopping-access-token');

    const handleMessageTextChange = (e) => {
        console.log(e.target.value);
        setMessageText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(messageText);

        const options = {
          method: 'POST',
          url: 'https://concept-crew-server.herokuapp.com/auth/msg',
          headers: {
            'x-access-tokens': access_token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          data: {
            message_text: messageText,
            offer_id: offer_id,
            user_id: sender_id,
            receiver_id: '33f6ec1a-1962-11ed-87f1-d678f9d6abea'
          }
        };
        
        axios.request(options).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });
        
        setMessageText('');
    }

  return (
    <form css={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    }}>
        <TextField
            onChange={handleMessageTextChange}
            value={messageText}
            label="Send a message"
            color="secondary"
            css={{
                position: 'relative',
                width: '90%',
                margin: '0 0.7rem',
                '& fieldset': {
                    borderColor: '#086788 !important',
                },
                '& label': {
                    color: '#086788 !important',
                },
            }}
            sx={{color: '#086788'}}/>
        <Button 
            onClick={handleSubmit}
            css={{
                width:'10%',
                height:'100%',
                borderRadius: '10px',
                '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.5) !important',
                    opacity: '1',
                },
                }}
        >
            <SendIcon css={{
            '& path': {
                color: '#086788 !important',
            },
            }}/>
        </Button>
    </form>
  )
}
