import React from 'react';
import staticServices from '../../constants/staticServices';

class ServicesSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            services: staticServices(),
        }
    }

    render(){
        const service = this.state.services.map((service, index) => {
            return(
                <div key={index} className='service' style={{borderLeft: `solid 1px ${service.color}`}}>
                    <img className="icon" src={service.iconServices} alt="icon"/>
                    <ul>
                        {service.list.map((element, index)=>{
                            return(
                                <li key={index}>{element.contentList}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        });

        return (
            <div className={'services-section'}>
                <div className='services container-dft'>
                    {service}
                </div>
            </div>
        )
    }
}

export default ServicesSection;
