import React from 'react'
import './Header.css'

import myImg from '../../Img/lok.png'


interface HeaderProps {
    log: string;
}

export const Header = ({ log }: HeaderProps) => {
    return (
        <div className='header'>
            <img className='img1' src={myImg} alt="Logo" />
            <span className='log'>{log}</span>
        </div>
    )
}