import React from 'react';

class VisionSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className={'vision-section'}>
                <div className="bg"></div>
                <div className='title'>
                    <h3><hr></hr>Our techno</h3>
                    <img className="icon" src="./images/devices_other-2.svg" alt="icon" />
                    <p>Design cross device</p>
                </div>

                <div className='description'>
                    <p>Curious and passionate about new technologies and technical issues, we would make a large network of talented people to create and build high quality digital solutions to meet your needs. Do not hesitate to challenge us, we will love to accompany you!</p>
                </div>
            </div>
        )
    }
}

export default VisionSection;
