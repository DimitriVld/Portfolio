import React from 'react';
import AppContext from "../../context/AppContext";

class Menu extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            showMenu: true,
        }
    }
    
    render(){
        return (
            <div className={'menu-atom display-none-dft'}>
                <p> This is a Menu atom </p>
            </div>
        )
    }
}

export default Menu;
