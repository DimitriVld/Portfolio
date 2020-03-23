import React from 'react';
import AppContext from "../../context/AppContext";
import Icon from './icons/Index';

class Header extends React.Component{
    static contextType = AppContext;

    toggleMenu = () => {
        this.context.showMenu = !this.context.showMenu;
        console.log(this.context.showMenu)
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
                        <p>text</p>
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
