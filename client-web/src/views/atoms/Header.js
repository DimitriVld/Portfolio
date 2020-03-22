import React from 'react';
import AppContext from "../../context/AppContext";
import { TimelineMax } from "gsap/all";
import Icon from './icons/Index';

class Header extends React.Component{
    static contextType = AppContext;

    toggleMenu = () => {
        this.context.showMenu = !this.context.showMenu;
        console.log(this.context.showMenu)
    }

    render() {
        return (
            <div className={"header-atom"}>
                {/* Logo */}
                <img className="header-logo" src="./images/logo.svg" alt="logo" />

                {/* Header Buttons */}
                <div className="header-buttons">
                {/* Translate */}
                <div className="translate"></div>

                {/* Burger Menu */}
                <div className="burger-menu" onClick={() => this.toggleMenu()}>
                    <Icon name="Burger" width={30} fill={"#000"} className="burger" />
                </div>
                </div>
            </div>
        );
    }
}

export default Header;
