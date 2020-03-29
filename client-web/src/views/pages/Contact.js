import React from 'react';

const Contact = () => {
    return (
        <div className={'contact-page container-dft height-100vh-dft'}>
            <img className="bg-logo" src="./images/logo_x4_2.svg" alt="logo" />

            {/* Title page */}
            <h1>Keep in touch !</h1>

            {/* List founders */}
            <div className='founders'>

                {/* Founder */}
                <div className='founder'>
                    <p className='fullname'>HOUNTONDJI Adebayo</p>
                    <p className='description'>Co-funder & devloper back</p>
                    <div className='socials'>
                        <a href='/'><img className="icon-mail" src="./images/icon_mail.svg" alt="Icon mail" /></a>
                        <a href='/'><img className="icon-tel" src="./images/icon_tel.svg" alt="Icon tel" /></a>
                        <a href='/'><img className="icon-linkedin" src="./images/icon_linkedin.svg" alt="Icon linkedin" /></a>
                    </div>
                </div>

                {/* Founder */}
                <div className='founder'>
                    <p className='fullname'>VILDINA Dimitri</p>
                    <p className='description'>Co-funder & devloper front</p>
                    <div className='socials'>
                        <a href='/'><img className="icon-mail" src="./images/icon_mail.svg" alt="Icon mail" /></a>
                        <a href='/'><img className="icon-tel" src="./images/icon_tel.svg" alt="Icon tel" /></a>
                        <a href='/'><img className="icon-linkedin" src="./images/icon_linkedin.svg" alt="Icon linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
