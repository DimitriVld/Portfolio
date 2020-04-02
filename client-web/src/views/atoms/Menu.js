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
                    <Link to='/'>Homepage</Link>
                    <Link to='/works'>Our works</Link>
                    <Link to='/services'>Our Services</Link>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/contact'>Contact us</Link>
                </nav>
            </div>
        )
    }
}

export default Menu;
