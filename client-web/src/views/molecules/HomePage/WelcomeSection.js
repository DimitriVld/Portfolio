import React from 'react';

const WelcomeSection = (props) => {
    return (
        <div className={`welcome-section section-dft ${props.services ? 'services' : 'home'}`}>
            <div className="container-dft">
                <img className="bg-logo" src="./images/logo_x4.svg" alt="logo" />
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
                <p className="scroll">Scroll</p>
            </div>
        </div>
    )
}

export default WelcomeSection;
