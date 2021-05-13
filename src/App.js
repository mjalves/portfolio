import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <>
      <Router>
          <NavBar />
            <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/About' component={About}  />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact}/>  
            <Route component={NotFoundPage} /> 
            </Switch>  
      </Router>
      </>
    );
  }
}
  
export default App;
