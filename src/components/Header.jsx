import React, { Component } from 'react';
import '../styles/Header/Header.css'
import Logo from './Logo';

class Header extends Component { 
        render() {
                return (
                        // height is 8vh
                        <header className="header"> 
                                <Logo />
                        </header>
                );
        }
}

export default Header;