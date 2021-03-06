import React from 'react';
import staticProjects from "../constants/staticProjects";

class SingleWorkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id),
            works: staticProjects(),
        };
    }

    render(){
        const work = this.state.works.find(element => element.id === this.state.id);
        return (
            <div className={'single-work-page container-dft padding-t-b-dft'}>

                {/* div header */}
                <div className='project-header'>
                    <p className='type'>{work.type}</p>
                    <h3 className='name'>{work.title}</h3>
                </div>

                {/* content */}
                <div className='project-content'>

                    {/* description */}
                    <div className='description'>
                        <p className='abstract'>{work.content}</p>
                        <div className='technos'>
                            <p>Techno we used</p>
                            <ul>
                                {work.techno.map((element, index) => {
                                    return <li key={index}>{element.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Iframe */}
                    <div className='iframe'>
                        <img className="img-work" src={work.img} alt="img work" />
                    </div>
                </div>

                {/* Link */}
                <a className='project-link' href={work.link}>
                    Go to the website
                    <img className="arrow" src='./images/arrow_forward.svg' alt="img work" />
                </a>
            </div>
        )
    }
}

export default SingleWorkPage;
