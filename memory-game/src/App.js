import React, { Component } from 'react';

import './App.css';
import { Row, Container } from "./components/Grid";
import images from "./images.json";
import Geometric from './components/Geometric';

class App extends Component {
 
  state = {
    images,
    win: "",
    pts: 0
  };
  rearrange = (arr) => {
   //Fisher-Yates Swap
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

 restart = () => {
   this.setState(() => {return {pts: 0, images, win: ""}});
   const imgs = document.getElementsByTagName("img");
   for (let i = 0; i < imgs.length; i++){
     imgs[i].setAttribute('data-clicked', 'false');
   }
 }
  
  play = event => {
    this.setState( ( ) => {
      return {images: this.rearrange(this.state.images)};
    } );
    if(event.target.getAttribute('data-clicked') === 'false'){
      event.target.setAttribute('data-clicked', "true");
      if(this.state.pts < 11){
        this.setState((prevState)=> {
          return { pts: prevState.pts + 1 }; })
      }
        
      else
        this.setState(() => {return {pts: 12, win: "You won!"}; })
    }
    else if (event.target.getAttribute('data-clicked') === 'true'){
        this.restart();
    }
  };

  render() {
    return (
      <Container fluid>
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Pattern Memory Game</h1>
          <h3>Points: {this.state.pts} State: {this.state.win}</h3>
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
