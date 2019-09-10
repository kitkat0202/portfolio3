import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
    render() {
        let { currentPage, pageChange } = this.props
        let renderLink = ["home", "portfolio", "about", "contact"].map((link, i) => {
            return (
                <li key={i} onClick={pageChange}>
                    <Link to={`/${link}`}>
                        <p className={`nlink ${currentPage === link || (currentPage === "" && link === "home") ? "nlinkActive" : ""}`} id={`${link}`}>
                            {link}
                        </p> 
                    </Link>
                </li>
            )
        })
        return (
            <div className={currentPage === "home" || currentPage === "" ? "navbox-home" : "navbox"}>
                <div className={currentPage === "home" || currentPage === "" ? "navbox-profile-home" : "navbox-profile"}>
                    <h1 className="profile-name">{currentPage === "home" || currentPage === "" ? "Hello World" : "Katherine He"}<span className="nav-shadow-mark" style={{fontSize: "40px", marginLeft: "7px"}}>!</span></h1>
                    {currentPage === "home" || currentPage === "" ? <h2 className="profile-position">My name is <span style={{textShadow: "-1.5px 0px 1px var(--primaryLight)"}}>Katherine</span></h2> : "" }
                    <h2 className="profile-position">{currentPage === "home" || currentPage === "" ? "Software Developer" : "Full-stack Developer"}</h2>
                    {currentPage === "home" || currentPage === "" ? <h2 className="profile-position">From <span style={{textShadow: "-1.5px 0px 1px var(--primaryLight)"}}>NYC</span></h2> : "" }
                    <hr style={currentPage === "home" || currentPage === "" ? {display: "none"} : {display: "block"}}/>
                </div>
                <div className={currentPage === "home" || currentPage === "" ? "navbox-links-home" : "navbox-links"}>
                    <ul>
                        {renderLink}
                    </ul>
                </div>
            </div>
        );
    }
}