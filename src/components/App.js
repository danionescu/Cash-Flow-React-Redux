import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="container" id="main-content">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Cash flow</h1>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
