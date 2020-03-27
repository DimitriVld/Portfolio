import React from 'react';
import staticProjects from "../../constants/staticProjects";

class WorksSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            works: staticProjects(),
        };
    }

    render(){
        const works = this.state.works.filter(work => work.id <= 3 ).map((work, index) =>{
            return(
                <p key={index}>{work.title}</p>
            )
        });
        
        return (
            <div className={'works-section'}>
                {works}
            </div>
        )
    }
}

export default WorksSection;
