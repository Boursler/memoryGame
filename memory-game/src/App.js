import React, { Component } from 'react';

import './App.css';
import { Row, Container } from "./components/Grid";
import images from "./images.json";
import Geometric from './components/Geometric';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    
    pts: 0
  };
  rearrange = (arr) => {
   
      var i = arr.length;
      if ( i === 0 ) return false;
      while ( --i ) {
         var j = Math.floor( Math.random() * ( i + 1 ) );
         var tempi = arr[i];
         var tempj = arr[j];
         arr[i] = tempj;
         arr[j] = tempi;
       }
    return arr;
  }

 
  
  play = event => {
    
    console.log(event.target);
    if(event.target.getAttribute('data-clicked') === 'false'){
      event.target.setAttribute('data-clicked', "true");
      if(this.state.pts <= 11){
        this.setState((prevState)=> {
          return { pts: prevState.pts + 1 }; })
      }
        
      else
        console.log("you win");
    }
    else if (event.target.getAttribute('data-clicked') === 'true'){
      this.rearrange(this.state.images);
    }

    
    // const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // });
  };

  render() {
    return (
      <Container fluid>
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Pattern Memory Game</h1>
          <h3>Points: {this.state.pts}</h3>
        </header>
        <p className="App-intro">
          Click on images to increase your score -- but watch out! If you click the same image twice, you will get NO POINTS for that click. The stakes are quite high. 
        </p>
        <Row>
          
           {this.state.images.map(pic => (
            <Geometric
              
               id={pic.id}
               key={pic.id}
               name={pic.name}
               image={pic.image}
               alt={pic.alt}
              play = {this.play}
               />
           ))}
           
        </Row>
      </div>
   </Container> 
    );
  }
}

export default App;
