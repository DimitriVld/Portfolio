import React from 'react';
import Burger from './icons/burger.svg';

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
                    <Burger />
                </div>
            </div>
        </div>
    )
}

export default Header;
