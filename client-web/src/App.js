import React from 'react';
import AppContext from './context/AppContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Default from "./views/layouts/DefaultLayout";
import HomePage from "./views/pages/Home";
import ServicesPage from "./views/pages/Services";
import WorksPage from "./views/pages/Works";
import SingleWorkPage from "./views/pages/SingleWork";
import AboutUsPage from "./views/pages/AboutUs";
import ContactPage from "./views/pages/Contact";

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
        <Router>
          <Route exact path="/" component={() => <Default page={<HomePage />} />} />
          <Route exact path="/services" component={() => <Default page={<ServicesPage />} />} />
          <Route exact path="/works" component={() => <Default page={<WorksPage />} />} />
          <Route exact path="/about-us" component={() => <Default page={<AboutUsPage />} />} />
          <Route exact path="/contact" component={() => <Default page={<ContactPage />} />} />
          <Route exact path="/work/:id" component={() => <Default page={<SingleWorkPage />} />} />
        </Router>
      </AppContext.Provider>
    );
  }

}

export default App;