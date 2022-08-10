/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { Box, TextField,Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { NoEncryption } from '@mui/icons-material';


export default function MessagePage() {
  return (
    <div css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '89.5vh',
    }}>
        <Box css={{
            position: 'relative',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0px 0px 10px #d3c9b2',
            height: '70vh',
            width: '90%',
            margin: '1rem 0.7rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        }} >
            <h1 css={{marginBottom:'0.5rem'}}>username: tester</h1>
            <Box css={{
                padding: '0.5rem',
                overflowY: 'scroll',
                position: 'relative',
                border: '1px solid #000',
                borderRadius: '0.5rem',
                width: '100%',
                height: '100%',
            }}>
                hello, please fill me with message text
            </Box>
        </Box>
        <div css={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            // border: '3px solid black',
            boxShadow: '0px 0px 10px #d3c9b2',
            borderRadius: '0.5rem',
            padding: '1rem',
        }}>
            <TextField
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
            <Button css={{
                width:'10%',
                height:'100%',
                borderRadius: '10px',
                '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.5) !important',
                    opacity: '1',
                },
                }}>
                <SendIcon css={{
                '& path': {
                    color: '#086788 !important',
                },
                }}/>
            </Button>
        </div>
    </div>
  )
}
