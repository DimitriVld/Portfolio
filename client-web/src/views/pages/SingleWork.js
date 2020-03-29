import React from 'react';
import staticProjects from "../constants/staticProjects";

class SingleWork extends React.Component {
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
            <div className={'single-work-page'}>
                <p>{work.id}</p>
            </div>
        )
    }
}

export default SingleWork;
