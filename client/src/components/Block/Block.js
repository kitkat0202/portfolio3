import React, { Component } from 'react';
import './Block.css'

export default class Block extends Component {
    render() {
        let { title, children, top, blockMargin } = this.props
        return (
                <div className="block-div">
                    <div className={`corner-box ${top ? "" : "top-space"}`}></div>
                    <div className={blockMargin ? "block-margin" : ""}>
                        <h3>{title}</h3>
                        <hr />
                        {children}
                    </div>
                </div>
        )
    }
}