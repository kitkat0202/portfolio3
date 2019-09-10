import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './Card.css';

export default class Card extends Component {
    render() {
        let { info, infoFunction, onOpen } = this.props
        
        const getInfo = () => {
            infoFunction(info)
            onOpen()
        }

        return (
            <Col xs={12} sm={6} md={6} lg={6} xl={4} onClick={getInfo} className="card-box">
                <div className="project-card">
                    <img src={info.imgPath === "" ? `https://via.placeholder.com/405x289` : info.imgPath} alt={info.name} />
                    <div className="card-text">
                        <h5 className="card-title">{info.name} <br/><span className="small-text">{info.note}</span></h5>
                    </div>
                </div>
            </Col>
        );
    }
}