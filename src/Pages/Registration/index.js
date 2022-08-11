/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from "react";
import {AddNewItem, Login, Register, Footer, SwapItem} from '../../Components'
import './registration.css'
import mockup from '../../Static/imgs/Abstract Iphone Mockup Instagram Story.png'
import logo from '../../Static/imgs/logo.png'

const Registration = () => {
    return (

        <div className='registerpage-container'>
            <img css={{width:'250px'}} src={logo}/>
            <img
                src={mockup}
                alt='iphone mockup'
                css={{
                    width: '250px',
                    transform: 'skewX(10deg)',
                    marginBottom: '1.5rem',
                    animation: 'rotate 30s linear infinite',
                    '@keyframes rotate': {
                        '0%': {
                            transform: 'rotate3d(1, -5, 2, -40deg)',
                        },
                        '50%': {
                            transform: 'rotate3d(1, -5, 2, 60deg)',
                        },
                        '100%': {
                            transform: 'rotate3d(1, -5, 2, -40deg)',
                        },
                    },

                }}
            />
            <div className='registerpage-body'>
                <div className='description-body'>
                    <h3>Why buy when you can <br />
                        <span css={{
                            // color:'#DD1C1A',
                            color: '#00B0AB',
                            fontWeight: '700',
                            textAlign:'center',
                            fontSize:'2rem'
                        }}>
                        swap</span>
                    </h3>
                    {/* <h4 css={{
                        padding: '1rem',
                        fontWeight: '400',
                        fontSize: '1.5rem',
                    }}>Staying fashionable and trying new clothes should not have to break the bank! <br /><br /> Here, you can find something you like, contact the owner of the item and<span css={{color:'#DD1C1A', fontWeight:'bold', fontSize:'1.7rem'}}>poof</span>, you can trade clothes with little hassle that doesn't take the fun out of fashion!</h4> */}
                </div>
            </div>
            <div className='registerpage-header'>
                <Login/>
                <Register/>
            </div>
            <Footer />
        </div>
    )}

export default Registration;
