import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
		super(props);
		
		this.state = {
      background: 'Red'
		};
	  }
	
	clicked(menu) {
		/*this.setState({
			active: menu,
    });*/
    this.setState({
      name: menu.name,
      background: menu.background,
    });
  }

	getInitialState(){
    return {
        colors: [
            'red',
            'blue'
        ],
        colorSelected: 'red'
    }
  }

render() {

  var divStyle = {
    backgroundColor:this.state.colorSelected,
    width:200,
    height:200
  };

    return (
            <div>
        <button onClick={this.handleButton}>Ganti Tema</button>
          <div style={divStyle}>
            <p>{this.state.colorSelected}</p>
          </div>
      </div>
    );
  }

handleButton() {

  var indexColor = this.state.background.findIndex(
    color => color == this.state.colorSelected
  );

  var colorSelected;

  if (typeof this.state.colors[indexColor+1] === 'undefined'){
    colorSelected = 'red'
  }
  else {
    colorSelected = this.state.colors[indexColor+1];
  }
  this.setState({colorSelected});
}
}

export default App;

