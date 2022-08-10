import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function InboxListItems(message) {
    console.log(message)
  return (
    <div className='conversation-info'>
        <AccountCircleIcon viewBox='0 0 30 30' className='conversation-avatar'/>
        <h3>{message.receiver_name}</h3>
        <p>{message.message_text}</p>
    </div>
  )
}
