import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import ProjectList from './components/ProjectList';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <div className="App">
          {/* Nav bar */}
          <div className="Navigation">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">John A. McMenemy</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Project List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Project</Link>
                </li>
              </ul>
            </div>
          </nav>
          </div>
          <div className="row">
            <div className="ActiveComponent col-8">
              <Route path="/" exact component={ProjectList} />
              <Route path="/edit/:id" component={EditProject} />
              <Route path="/create" component={CreateProject} />
            </div>
            <div className="Sidebar col bg-light">
              Sidebar
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
