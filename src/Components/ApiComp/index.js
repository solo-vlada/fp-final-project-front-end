import React, { useState, createContext }  from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApiComp() {
    const navigate = useNavigate()

    const user_id = localStorage.getItem('shopping-user-id')
    const getMessages = async () => {
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
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setMessages(response.data);
          }).catch(function (error) {
              console.error(error);
          });
      }
  }
  getMessages();

  return (
    <div>ApiComp</div>
  )
}
