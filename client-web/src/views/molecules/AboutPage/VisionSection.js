import React from 'react';
import staticSkills from "../../constants/staticSkills";

class VisionSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: staticSkills(),
        }
    }

    render(){
        const skill = this.state.skills.map((skill, index) => {
            return(
                <img key={index} className="icon" src={skill.icon} alt="icon"/>
            )
        })
        return (
            <div className={'vision-section'}>
                <div className="bg"></div>
                <div className='description'>
                    <h3><hr></hr>Our techno</h3>
                    <p>We gather a panel of techno to succeed at best all of our projects</p>
                </div>

                <div className='icons'>
                    {skill}
                </div>
            </div>
        )
    }
}

export default VisionSection;
