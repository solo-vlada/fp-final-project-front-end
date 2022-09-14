/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ApiContext } from '../../ApiContext';
import axios from 'axios';
import { SendMessage } from '../../Components'


export default function MessagePage() {
    const navigate = useNavigate();
    const { offer_id } = useParams();
    const [message, setMessage] = useContext(ApiContext);
    const user_id = localStorage.getItem('shopping-user-id');
    const [getReceiver, setGetReceiver] = useState();
    const sender_id = localStorage.getItem('shopping-user-id');
    const access_token = localStorage.getItem('shopping-access-token');

    // *************************** SEND MESSAGE IN CHAT ***************************

    //API endpoint for recieving messages
    const api_url = `https://concept-crew-server.herokuapp.com/auth/msg`
    const apiGetOfferById = `https://concept-crew-server.herokuapp.com/auth/msg?offer_id=${offer_id}`;

    useEffect(() => {
        console.log(user_id);

        const getMessages = async () => {
            const user_id = localStorage.getItem('shopping-user-id')
            if (!user_id) {
                navigate('/');
            } else {
                const clientToken = localStorage.getItem('shopping-access-token');
                console.log(clientToken);
                const options = {
                    method: 'GET',
                    url: apiGetOfferById,
                    headers: {
                    'x-access-tokens': clientToken,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    },
                    
                };
                
                await axios.request(options)
                .then( (response) => {
                    console.log(`Data: ${JSON.stringify(response.data)}`);
                    setMessage(response.data);
                    if (response.data.Messages[0].sender === user_id) {
                        setGetReceiver(response.data.Messages[0].receiver);
                    } else {
                        setGetReceiver(response.data.Messages[0].sender);
                    }
                    // apiData = response.data
                    console.log(message); 
                })
                .catch(function (error) {
                    console.error(error);
                });
            }
        }
        getMessages();
    }, [])


  return (
    <>
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
                    <h1 css={{marginBottom:'0.5rem'}}>username: {}</h1>
                    <Box css={{
                        padding: '0.5rem',
                        overflowY: 'scroll',
                        position: 'relative',
                        border: '1px solid #000',
                        borderRadius: '0.5rem',
                        width: '100%',
                        height: '100%',
                    }}>
                        {message !== null && message !== undefined ? message.Messages.map((message,index) => {
                            return (
                                <div key={index} css={{
                                    borderRadius: '1rem',
                                    padding: '1rem',
                                    backgroundColor: '#086788',
                                    color:'#fff',
                                    marginBottom: '1rem',
                                }}>
                                    <p>
                                        {message.message_text}
                                    </p>
                                    <p css={{
                                        fontSize:'0.7rem',
                                        
                                    }}>
                                        {message.sender_name}
                                    </p>
                                </div>
                            )   
                        }) : <p>Loading...</p>}
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
                    <SendMessage offer_id={offer_id} getReceiver={getReceiver}/>
                </div>
            </div>

    </>
  )
}
