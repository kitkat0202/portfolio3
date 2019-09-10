import React, { Component, Fragment } from 'react'
import { Row, ButtonToolbar } from 'react-bootstrap'
import Block from '../../components/Block/Block'
import Card from '../../components/Card'
import CardModal from '../../components/Card/CardModal'
import data from '../../portfolio.json'
import './Portfolio.css'

export default class Portfolio extends Component {
    state = {
        modalShow: false,
        info: {}
    }

    render() {
        // open modal
        const modalOpen = () => this.setState({ modalShow: true })

        // close modal
        const modalClose = () => this.setState({ modalShow: false })

        // add info to modal
        const pullInfo = info => {
            this.setState({ info })
        }

        // featured project cards
        const featuredCards = data.map((card, i) => {
            if (card.showbool && card.featurebool) {
                return (
                    <Card key={i} info={card} infoFunction={pullInfo} onOpen={modalOpen}/>
                )
            } else {
                return ""
            }
        })

        // project cards
        const renderCards = data.map((card, i) => {
            if (card.showbool && !card.featurebool) {
                return (
                    <Card key={i} info={card} infoFunction={pullInfo} onOpen={modalOpen}/>
                )
            } else {
                return ""
            }
        })

        return (
            <Fragment>
                <ButtonToolbar>
                    <CardModal show={this.state.modalShow} onHide={modalClose} chosen={this.state.info}/>
                </ButtonToolbar>
                <div className="profile-info">
                    <Block 
                        title="Featured Projects" 
                        top={true} 
                        blockMargin={false}>
                            <Row>
                                {featuredCards}
                            </Row>
                    </Block>
                    <Block 
                        title="Projects"
                        blockMargin={false}>
                            <Row>
                                {renderCards}
                            </Row>
                    </Block>
                </div>
            </Fragment>
        );
    }
}