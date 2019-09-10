import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './AboutSocial.css';

export default class AboutSocial extends Component {
    render() {
        let { name, iconClass, link } = this.props
        
        return (
            <Col xs={6} md={3}>
                <a href={link} target="_blank" rel="noopener noreferrer" >
                    <i className={iconClass}></i>
                    <p>{name}</p>
                </a>
            </Col>
        );
    }
}
