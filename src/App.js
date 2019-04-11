import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  

  getInitialState(){
    return {
        colors: [
            'red',
            'blue'
        ],
        colorSelected: 'red'
    }
  }

  constructor(props) {
		super(props);
		
		this.state = {
      colors: 'red'
		};
	  }
	
	clicked(menu) {
		/*this.setState({
			active: menu,
    });*/
    this.setState({
      name: menu.name,
      colors: menu.colors,
    });
  }

	

render() {

  var buttonStyle = {
    marginBottom:4
  };

  var divStyle = {
    backgroundColor:this.state.colorSelected,
    width:200,
    height:200
  };

    return (
            <div>
        <button onClick={this.handleButton} style={buttonStyle}>Ganti Tema</button>
          <div style={divStyle}>
            <p>{this.state.colorSelected}</p>
          </div>
      </div>
    );
  }


}

export default App;

