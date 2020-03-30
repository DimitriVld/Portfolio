import React from 'react';
import WelcomeSection from "../molecules/HomePage/WelcomeSection";
import CultureSection from "../molecules/AboutPage/CultureSection";
import ContactSection from "../molecules/AboutPage/ContactSection";

class AboutUsPage extends React.Component{

    render(){
        return (
            <div className={'about-us-page'}>
                <WelcomeSection />
                <CultureSection />
                <ContactSection />
            </div>
        )
    }
}

export default AboutUsPage;
