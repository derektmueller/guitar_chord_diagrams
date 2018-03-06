import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Editor from "./Editor.jsx";
import Index from "./Index.jsx";

export default class Routes extends React.Component {
  render() {
    return <Router>
      <div>
        <nav>
          <Link to='/'>Fretboard Diagrams</Link>
          <Link to='/' className='home'>Home</Link>
          <Link to='/editor' className='editor'>Editor</Link>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/editor" component={Editor} />
      </div>
    </Router>;
  }
}
