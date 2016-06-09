import React, { Component } from 'react';
import { Link } from 'react-router';
import MainList from './MainList.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/add" className="btn btn-primary">Add transaction</Link>
        </p>

        <MainList/>
      </div>
    );
  }
}
