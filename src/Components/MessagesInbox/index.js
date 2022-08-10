import React, { useContext, useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import InboxListItems from '../InboxListItems';
import { ApiContext } from '../../ApiContext';

export default function MessagesInbox() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [myMessage, setMyMessage] = useContext(ApiContext);
    const user_id = localStorage.getItem('shopping-user-id');

    let apiData = null;
    // **************** NAVIGATE TO MESSAGE PAGE ****************

    // handle click on message preview in inbox
    const handleClick = () => {
        navigate(`/messages/${id}`);
    }

    // endpoints for getting messages
    const dev_url = `http://localhost:5050/auth/msg/${user_id}`
    const api_url = `https://concept-crew-server.herokuapp.com/auth/msg/${user_id}`

    // console.log(message.Messages)

    // ********************* GET ALL MESSAGES *********************

    useEffect(() => {
        console.log(user_id);

        const getMessages = async () => {
            const user_id = localStorage.getItem('shopping-user-id')
            if (!user_id) {
                navigate('/');
            } else {
                const clientToken = localStorage.getItem('shopping-access-token');
                const sender_id = localStorage.getItem('shopping-user-id');
                console.log(clientToken);
                const options = {
                    method: 'GET',
                    url: 'http://localhost:5050/auth/msg',
                    headers: {
                    'x-access-tokens': clientToken,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    },
                    
                };
                
                await axios.request(options).then(function (response) {
                    console.log(`Data: ${JSON.stringify(response.data)}`);
                    setMyMessage(response.data);
                    // apiData = response.data
                    console.log(myMessage);
                }).catch(function (error) {
                    console.error(error);
                });
            }
        }
        getMessages();
    }, [])

    const allMsgs = () => {
    const msgArray = myMessage.Messages;
    for(let i = 0; i < msgArray.length; i++) {
        let arr = [];
        arr.push(msgArray[i]);
        return arr;

    }

    }
  return (
    <div>
        <div className='inbox-container'>
                {/* <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/> */}
                {/* {myMessage != null ? <h1>{myMessage.Messages[0].receiver_name}</h1> : <p>Loading...</p>} */}
                {myMessage != null ?
                        myMessage.Messages.map((message,index) => {
                            return (
                                <div onClick={handleClick} className='conversation-container'>
                                <div key={index} className='conversation-info'>
                                    <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                                    <h3 >{message.receiver_name}</h3>
                                    <p>{message.message_text}</p>
                                </div> 
                                </div>
                            )   
                        }) 
                    : <p>Loading...</p>}

                {/* <h1>{apiData.Messages[0].sender}</h1> */}
                

        </div>
    </div>
  )
}
