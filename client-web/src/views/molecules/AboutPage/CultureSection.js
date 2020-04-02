import React from 'react';
import staticCultures from '../../constants/staticCultures';

class CultureSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cultures: staticCultures(),
        };
    }

    render(){
        const culture = this.state.cultures.map((culture, index) => {
            return(
                <div key={index} className='culture'>
                    <h4>{culture.title}</h4>
                    <p>{culture.content}</p>
                </div>
            )
        })

        return (
            <div className={'culture-section'}>
                <div className='container-dft content'>
                    <h3>Our culture,<br/> values and <br/>belief</h3>
                    <div className='cultures'>
                        {culture}
                    </div>
                </div>
            </div>
        )
    }
}

export default CultureSection;
