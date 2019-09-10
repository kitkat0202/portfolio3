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
    state = {
        currentPage: ""
    }

    componentDidMount() {
        this.setState({ currentPage: window.location.pathname.replace("/", "") })
    }

    pageChange = event => {
        let { id }  = event.target
        this.setState({ currentPage: id })
    }

    render() {
        let { currentPage } = this.state

        if (currentPage === "home" || currentPage === "") {
            document.body.style.backgroundImage = "radial-gradient(circle, rgba(255,255,255,1) 15%, rgba(127,137,140,1) 100%)"
        } else if (currentPage === "portfolio") {
            document.body.style.backgroundImage = "radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(212,216,217,1) 70%, rgba(145,154,156,1) 100%)"
        } else if (currentPage === "about") {
            document.body.style.backgroundImage = "radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(212,216,217,1) 80%, rgba(145,154,156,1) 100%)"
        } else if (currentPage === "contact") {
            document.body.style.backgroundImage = "radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(212,216,217,1) 90%, rgba(145,154,156,1) 100%)"
        }

        return (
            <Router>
                <div className="contain">
                    <Nav currentPage={currentPage} pageChange={this.pageChange}/>
                    <div className="container-right" style={currentPage === "home" || currentPage === "" ? {display: "none"} : {}}>
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