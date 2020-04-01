import React from 'react';
import { Link } from "react-router-dom";
import { TimelineLite } from "gsap";
import Icon from './icons/Index';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.myTween = new TimelineLite({ paused: true })
        this.state = {
            showMenu: false,
        }
    }

    animationMenu = () => {
        const menuElement = document.querySelector(".menu-atom");
        return(
            this.myTween
                .to(menuElement, 1, {bottom: 0})
                .to(menuElement, 1, { width: '100%', ease: "expo"})
        )
    }

    toggleMenu = () => {
        this.state.showMenu ? this.animationMenu().reverse() : this.animationMenu().play();
        this.setState({ showMenu: !this.state.showMenu });
        document.querySelector('.burger-icon').classList.toggle('active');
    }

    render() {
        return (
            <div className={"header-atom"} id='my-element'>
                {/* Logo */}
                <Link to={'/'}>
                    <img className="header-logo" src="./images/logo.svg" alt="logo" />
                </Link>

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
