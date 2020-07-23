import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';
// import Partner from './Components/Partner';

import { AppRouter } from './Router';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="container">
            <AppRouter />
        </div>
    );
  }
}

export default App;
