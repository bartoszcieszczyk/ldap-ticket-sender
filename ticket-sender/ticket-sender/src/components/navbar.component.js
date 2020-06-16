import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
export default class Navbar extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='localhost:8080' />
    }
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Task Sender</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Tasks</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Task</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <a href="localhost:8080/login" className="nav-link" target="_blank" rel="noopener noreferrer">Logout</a>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

