import React from 'react';
import WelcomeSection from '../molecules/HomePage/WelcomeSection';
import ServicesSection from '../molecules/ServicesPage/ServicesSection';
import JobsSection from "../molecules/ServicesPage/JobsSection";

const ServicesPage = () => {
    const text = `At AD. Agency, \n We are committed to defining for you, maintainable digital solutions, scalable, efficient and secure to better meet your needs. \n Thanks to the variety and versatility of our talented employees, we can intervene and follow from A to Z on all your projects. \n Let's do it!`
    return(
        <div className={'services-page'}>
            <WelcomeSection
                title='Our services'
                subTitle={text}
                services={true}
            />
            <ServicesSection />
            <JobsSection />
        </div>
    )
}

export default ServicesPage;
