import React from 'react'
import {MessagesInbox} from '../../Components'
import './inbox.css'
import {BottomNav} from "../../Components";


export default function MessageInbox() {
  return (
    <>
        <h1 className='messageinbox-header'>Current Offers</h1>
        <MessagesInbox /> 
        <BottomNav />
    </>
  )
}
