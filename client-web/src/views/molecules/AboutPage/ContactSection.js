import React from 'react';
import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
        <div className={'contact-section padding-t-b-dft'}>
            <div className='container-dft content'>
                <h3>Work with us</h3>
                <h4>Let’s work together to build something great.</h4>
                <Link to={'/contact'}>
                    Contact us 
                    <img className="icon-arrow border-rounded-dft" src="./images/icon_arrow.svg" alt="Arrow" />
                </Link>
            </div>
        </div>
    )
}

export default ContactSection;
