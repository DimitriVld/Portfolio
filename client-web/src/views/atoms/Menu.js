import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render(){
        return (
            <div className={'menu-atom'}>
                <nav className='nav'>
                    <Link to='/' className={'link-menu'}>Homepage</Link>
                    <Link to='/works' className={'link-menu'}>Our works</Link>
                    <Link to='/services' className={'link-menu'}>Our Services</Link>
                    <Link to='/about-us' className={'link-menu'}>About Us</Link>
                    <Link to='/contact' className={'link-menu'}>Contact us</Link>
                </nav>
            </div>
        )
    }
}

export default Menu;
