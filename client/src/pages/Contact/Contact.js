import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Block from '../../components/Block/Block'
import AboutSocial from '../../components/AboutSocial'
import API from '../../utils/API'
import './Contact.css'

export default class Contact extends Component {
    state = {
        sendName: "",
        sendContact: "",
        sendMessage: "",
        errName: false,
        errContact: false,
        errMsg: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    
    handleFormSubmit = event => {
        event.preventDefault()
        const { sendName, sendContact, sendMessage } = this.state
        const data = {
            name: sendName, 
            contact: sendContact, 
            msg: sendMessage
        }

        if ( sendName === "" && sendContact === "" ) {
            this.setState({errName: true, errContact: true, errMsg: false})
        } else if ( sendName !== "" && sendContact === "" ) {
            this.setState({errName: false, errContact: true, errMsg: false})
        } else if ( sendName === "" && sendContact !== "" ) {
            this.setState({errName: true, errContact: false, errMsg: false})
        } else {
            this.setState({errName: false, errContact: false, errMsg: false})
            API
                .saveMessage(data)
                .then(() => {this.setState({ sendContact: "", sendName: "", sendMessage: "" })})
                .catch(err => this.setState({ errMsg: true }, () => console.log(err)))
        }
    }
    render() {
        const { sendName, sendContact, sendMessage, errName, errContact, errMsg } = this.state
        return (
            <div className="contact-info">
                <Block 
                    title="Contact" 
                    top={true} 
                    blockMargin={true}>
                        <p><span className="bolder">Telephone: </span>1 (347) 679 - 1939</p>
                        <p><span className="bolder">Email: </span><a href="mailto:he.katherine321@gmail.com">he.katherine321@gmail.com</a></p>
                </Block>

                <Block 
                    title="Social Media" 
                    top={false} 
                    blockMargin={false}>
                        <Row>
                            <Col xs={12}>
                                <Row className="social">
                                    <AboutSocial name="Facebook" iconClass="fab fa-facebook" link="https://www.facebook.com/katherine.he"/>
                                    <AboutSocial name="Github" iconClass="fab fa-github" link="https://github.com/kitkat0202"/>
                                    <AboutSocial name="Instagram" iconClass="fab fa-instagram" link="https://www.instagram.com/kitkat02029/"/>
                                    <AboutSocial name="Linkedin" iconClass="fab fa-linkedin-in" link="https://www.linkedin.com/in/katherinehe2/"/>
                                </Row>
                            </Col>
                        </Row>
                </Block>

                <Block 
                    title="Send Message" 
                    top={false} 
                    blockMargin={true}>
                        <form className="contact-form">
                            <input
                                name="sendName"
                                value={sendName}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Name"
                                autoComplete="off"
                            />
                            <span className={errName ? "err-span" : "err-clear err-span"}>Name is Required</span>

                            <input
                                name="sendContact"
                                value={sendContact}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Contact"
                                autoComplete="off"
                            />
                            <span className={errContact ? "err-span" : "err-clear err-span"}>Contact info is Required</span>

                            <textarea
                                name="sendMessage"
                                value={sendMessage}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Message..."
                                autoComplete="off"
                                className="scrollbar scrollbar-message"
                            />
                            <span className={errMsg ? "err-span" : "err-clear err-span"}>We apologize, the message was not able to send</span>
                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                </Block>
            </div>
        )
    }
}