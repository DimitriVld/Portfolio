import React from 'react';
import AppContext from './context/AppContext';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render() {
    return (
        <AppContext.Provider value={this.state}>
          <center> <h1 style={{fontSize: '35px', fontWeight: 'bold', marginTop: '20px'}}> Portfolio </h1> </center>
        </AppContext.Provider>
    );
  }

}

export default App;