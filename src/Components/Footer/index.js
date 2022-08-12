/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react'

export default function Footer() {
  return (
    <div className='footer' css={{
        position: 'absolute',
        display: 'flex',
        fontFamily: 'Montserrat',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d8bd',
        borderRadius: "5px",
        width: '100%',
        padding: '20px',
        marginTop: '15px',
        bottom: '0',
    }}>
        <div className='footer-content'>
            <p>concept crew © 2022</p>
        </div>
    </div>
  )
}
