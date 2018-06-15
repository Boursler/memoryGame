import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import images from "./images.json";
import Geometric from './components/Geometric';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    clicked: false,
    pts: 0
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pattern Memory Game</h1>
        </header>
        <p className="App-intro">
          Click on images to increase your score -- but watch out! If you click the same image twice, you will get NO POINTS for that click. The stakes are quite high. 
        </p>
        
          
           {this.state.images.map(pic => (
            <Geometric
              //  removeFriend={this.removeFriend}
               id={pic.id}
               key={pic.id}
               name={pic.name}
               image={pic.image}
               alt={pic.alt}
             
               />
           ))}
        
      </div>
    
    );
  }
}

export default App;
