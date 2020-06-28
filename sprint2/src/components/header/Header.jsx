import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="../../assets/Logo/Logo-brainflix.svg" alt="BrainFlix_logo"/>
            </Link>
            <form action="" className="header__search">
                <input type="text" className="header__searchbox userIn" placeholder="Search"/>
            </form>
            <div className="header__buttons">
                <Link to="/upload">
                    <button className="header__upload btn">+ Upload</button>
                </Link>
                <img src="../../assets/Images/Mohan-muruge.jpg" alt="Profile_pic" className="header__profile"/>
            </div>            
        </div>
    )
}