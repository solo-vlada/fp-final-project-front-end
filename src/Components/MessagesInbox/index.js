import React, { useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MessagesInbox() {
    const navigate = useNavigate();
    const { id } = useParams();
    const user_id = localStorage.getItem('shopping-user-id');

    const handleClick = () => {
        navigate(`/messages/${id}`);
    }

    const dev_url = `http://localhost:5050/auth/msg/${user_id}`
    const api_url = `https://concept-crew-server.herokuapp.com/auth/msg/${user_id}`
    useEffect(() => {
        const user_id = localStorage.getItem('shopping-user-id');
        console.log(user_id);
        if (!user_id) {
            navigate('/');
        } else {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
            }
    
            const response = axios.get(dev_url, { headers })
            response.then(res => {
                console.log(res)
            })
        }
    },[]);

  return (
    <div>
        <div className='inbox-container'>
            <div onClick={handleClick} className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='conversation-container'>
                <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
                <div className='conversation-info'>
                    <h3>Offer 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
