import React from 'react';
import WelcomeSection from '../molecules/HomePage/WelcomeSection';
import UsSection from "../molecules/HomePage/UsSection";
import WorksSection from "../molecules/HomePage/WorksSection";

const Home = () => {
    return(
        <div className={'home-page'}>
            <WelcomeSection />
            <UsSection />
            <WorksSection />
        </div>
    )
}

export default Home;
