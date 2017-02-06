'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dogs: []};


  }
  render() {
    return (
      <div id="main" className="container-fluid">
      <h1>{this.state.dogs.map(dog => {dog.name;})}</h1>
      </div>
    );
  }
}
