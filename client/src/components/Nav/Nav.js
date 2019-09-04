import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
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
        let renderLink = ["home", "portfolio", "about", "contact"].map((link, i) => {
            return (
                <li key={i} onClick={this.pageChange}>
                    <Link to={`/${link}`}>
                        <p className={`nlink ${currentPage === link ? "nlinkActive" : ""}`} id={`${link}`}>
                            {link}
                        </p> 
                    </Link>
                </li>
            )
        })
        return (
            <div className={currentPage === "home" || currentPage === "" ? "navbox-home" : "navbox"}>
                <div className={currentPage === "home" || currentPage === "" ? "navbox-profile-home" : "navbox-profile"}>
                    <h1 className="profile-name">{currentPage === "home" || currentPage === "" ? "Hello World!" : "Katherine He"}</h1>
                    <h2 className="profile-position">{currentPage === "home" || currentPage === "" ? "Software developer from NYC" : "Full-stack Developer"}</h2>
                    <hr style={currentPage === "home" || currentPage === "" ? {display: "none"} : {}}/>
                </div>
                <div className={currentPage === "home" ? "navbox-links-home" || currentPage === "" : "navbox-links"}>
                    <ul>
                        {renderLink}
                    </ul>
                </div>
            </div>
        );
    }
}