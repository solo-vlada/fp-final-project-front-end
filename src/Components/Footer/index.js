/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react'

export default function Footer() {
  return (
    <div className='footer' css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe7b0',
        width: '100%',
        padding: '2rem',
    }}>
        <div className='footer-content'>
            <p>concept crew © 2022</p>
        </div>
    </div>
  )
}
