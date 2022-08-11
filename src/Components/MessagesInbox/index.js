import React, { useContext, useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import InboxListItems from '../InboxListItems';
import { ApiContext } from '../../ApiContext';

export default function MessagesInbox() {
    const navigate = useNavigate();
    // const { id } = useParams();
    const [receiverUrl, setReceiverUrl] = useState();
    const [message, setMessage] = useContext(ApiContext);
    const user_id = localStorage.getItem('shopping-user-id');

    // **************** NAVIGATE TO MESSAGE PAGE ****************

    // handle click on message preview in inbox
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.dataset.receiver_id);
        navigate(`/messages/${e.target.dataset.receiver_id}`);
    }

    // endpoints for getting messages
    const dev_url = `http://localhost:5050/auth/msg/${user_id}`
    const api_url = `https://concept-crew-server.herokuapp.com/auth/msg`

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
                    url: api_url,
                    headers: {
                    'x-access-tokens': clientToken,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    },
                    
                };
                
                await axios.request(options).then(function (response) {
                    setMessage(response.data);
                    console.log(`Data: ${JSON.stringify(response.data)}`);
                    // apiData = response.data
                    console.log(message);
                }).catch(function (error) {
                    console.error(error);
                });
            }
        }
        getMessages();
    }, [])

    const allMsgs = () => {
    const msgArray = message.Messages;
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
                {/* {message != null ? <h1>{message.Messages[0].receiver_name}</h1> : <p>Loading...</p>} */}
                {message != null ?
                        message.Messages.map((message,index) => {
                            return (
                                <div data-receiver_id={message.receiver} key={index} onClick={handleClick} className='conversation-container'>
                                    <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                                <div className='conversation-info'>
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
