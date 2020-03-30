import React from 'react';
import ServicesSection from '../molecules/ServicesPage/ServicesSection';
import JobsSection from "../molecules/ServicesPage/JobsSection";

const ServicesPage = () => {
    return(
        <div className={'services-page'}>
            <ServicesSection />
            <JobsSection />
        </div>
    )
}

export default ServicesPage;
