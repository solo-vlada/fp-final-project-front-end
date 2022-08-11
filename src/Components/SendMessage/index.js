/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react'
import { TextField,Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function SendMessage() {
    const [messageText, setMessageText] = useState('');

    const handleMessageTextChange = (e) => {
        console.log(e.target.value);
        setMessageText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(messageText);

        const formData = {
            message_text: messageText,
        }
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
