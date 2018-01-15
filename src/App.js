import React, { Component } from 'react';
import './App.css';
import FrontBanner from './Components/FrontBanner';
import Content from './Components/Content';
import Footer from './Components/Footer';



class App extends Component {

  render() {

    return (
   
      <div className="App">
        <header>
        <FrontBanner/>    
        </header>
        <p className="App-intro">
        </p>
        <Content/>
        <Footer/>
         
      </div>
    );
  }
}

export default App;
