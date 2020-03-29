import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
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
                <div className={`work ${work.inverse ? 'inverse' : ''}`} key={index}>
                    <div className="bg"></div>
                    <div className="fullname">
                        <Link to={`/work/${work.id}`}>
                            <h4><hr></hr>{work.title}</h4>
                        </Link>
                        <img className="img-work" src={work.img} alt="img work" />
                    </div>
                    <div className="descriptions">
                        <p>{work.content}</p>
                        <a href={work.link}>Discover</a>
                    </div>
                </div>
            )
        });
        
        return (
            <div className={'works-section container-dft'}>
                <h3><hr></hr>Our last works</h3>
                {works}
            </div>
        )
    }
}

export default WorksSection;
