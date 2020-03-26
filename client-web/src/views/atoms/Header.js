import React from 'react';
import Icon from './icons/Index';

class Header extends React.Component{

    toggleMenu = () => {
        document.querySelector('.menu-atom').classList.toggle('display-none-dft');
        document.querySelector('.burger-icon').classList.toggle('active');
    }

    render() {
        return (
            <div className={"header-atom"}>
                {/* Logo */}
                <img className="header-logo" src="./images/logo.svg" alt="logo" />

                {/* Header buttons */}
                <div className="header-buttons">
                    {/* Translate */}
                    <div className="translate">
                        <button>Fr</button> / <button>En</button>
                    </div>

                    {/* Burger menu */}
                    <div className="burger-menu border-rounded-dft" onClick={() => this.toggleMenu()}>
                        <Icon name="Burger" width={30} stroke={"#fff"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
