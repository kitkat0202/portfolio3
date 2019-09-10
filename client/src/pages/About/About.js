import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Block from '../../components/Block/Block'
import data from '../../language.json';
import Image from '../../He_Katherine_Resume.jpg'
import Resume from '../../He_Katherine_Resume.pdf'
import './About.css'

export default class About extends Component {
    render() {
        const renderlang = data.map((info, i) => {
            if (info.showbool) {
                return (
                    <Col key={i} xs={6} md={4} lg={3} className="lang-div">
                        <i key={i} className={info.icon}></i>
                        <p>{info.name}</p>
                    </Col>
                )
            } else {
                return ""
            }
            
        })
        const googleLink = "https://drive.google.com/file/d/1FdVwmc7eVeTBpjzLda5nwJXZGQYdJ8Sg/view?usp=sharing"
        return (
            <div className="about-info">
                <Block 
                    title="About" 
                    top={true} 
                    blockMargin={true}>
                        <p className="justify-txt">I am driven by the desire to succeed and am eager to apply my strong leadership experiences, and 
                        interpersonal skills to achieve this success. I always look forward to new experiences and further 
                        developing my technical and professional skills.</p>
                </Block>

                <Block 
                    title="Skills" 
                    top={false} 
                    blockMargin={false}>
                        <Row>
                            {renderlang}
                        </Row>
                </Block>

                <Block 
                    title="Resume" 
                    top={false} 
                    blockMargin={true}>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                            <img src={Image} alt="Resume" />
                        </a>
                        
                        <div className="resume-link-div">
                            <a href={Resume} target="_blank" rel="noopener noreferrer">
                                <p>
                                    <i className="far fa-file-pdf"></i>
                                    <span className="resume-link-text">P D F</span>
                                </p>
                            </a>
                            <a href={Resume} download="Katherine_He_Resume">
                                <p>
                                    <i className="fas fa-file-download"></i>
                                    <span className="resume-link-text">Download</span>
                                </p>
                            </a>
                            <a href={googleLink} target="_blank" rel="noopener noreferrer">
                                <p>
                                    <i className="fab fa-google-drive"></i>
                                    <span className="resume-link-text">Drive</span>
                                </p>
                            </a>
                        </div>
                </Block>
            </div>
        )
    }
}