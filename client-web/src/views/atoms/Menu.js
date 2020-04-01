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
                    <Link to='/'>Menu</Link>
                </nav>
            </div>
        )
    }
}

export default Menu;
