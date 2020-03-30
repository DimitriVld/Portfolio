import React from 'react';
import { Link } from "react-router-dom";
import staticProjects from "../constants/staticProjects";

class WorksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            works: staticProjects(),
        };
    }

    render(){
        const works = this.state.works.map((work, index) =>{
            return(
                <Link to={`/work-${work.id}`} className={'work'} key={index}>
                    <h4>{work.title}</h4>
                    <p>{work.type}</p>
                </Link>
            )
        });
        
        return (
            <div className={'works-page container-dft padding-t-b-dft'}>
                <img className="bg-logo" src="./images/logo_x4_3.svg" alt="logo" />
                <h1>Our works</h1>
                <div className={'works'}>
                    {works}
                </div>
            </div>
        )
    }
}

export default WorksPage;
