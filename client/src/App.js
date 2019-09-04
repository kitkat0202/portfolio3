import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="contain">
                    <Nav />
                    <div className="container-right">
                        <Switch>
                            <Route exact path="/" render={() => <Home /> } />
                            <Route exact path="/home" render={() => <Home /> } />
                            <Route exact path="/about" render={() => <About /> } />
                            <Route exact path="/portfolio" render={() => <Portfolio /> } />
                            <Route exact path="/contact" render={() => <Contact /> } />
                            <Route render={() => <Error /> } />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;