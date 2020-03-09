import React from 'react';
import Icon from './icons/Index';

const Header = () => {
    return (
        <div className={'header-atom'}>
            {/* Logo */}
            <img className='header-logo' src='./images/logo.svg' alt='logo'/>

            {/* Header Buttons */}
            <div className='header-buttons'>
                
                {/* Translate */}
                <div className='translate'>

                </div>

                {/* Burger Menu */}
                <div className='burger-menu'>
                    <Icon name="Burger" width={30} fill={"#000"}  className='burger'/>
                </div>
            </div>
        </div>
    )
}

export default Header;
