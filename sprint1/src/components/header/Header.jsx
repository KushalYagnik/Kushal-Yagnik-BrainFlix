import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../Logo/Logo-brainflix.svg';

export default function Header(){
    return(
        <div className="header">
            <Logo className="header__logo" />
            <form action="" className="header__search">
                <input type="text" className="header__searchbox" placeholder="Search"/>
            </form>
            <div className="header__buttons">
                <button className="header__upload btn">+ Upload</button>
                <img src="./assets/Images/Mohan-muruge.jpg" alt="Profile_pic" className="header__profile"/>
            </div>
        </div>
    )
}