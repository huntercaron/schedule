import React, { Component } from 'react';

class BackButton extends Component {
    constructor(props) {
        super(props);
        this.handleDisplayMenuChange = this.handleDisplayMenuChange.bind(this);
    }

    handleDisplayMenuChange(view) {
        this.props.onDisplayMenuChange(view);
    }

    render() {
        return (
            <button className="back-button" onClick={() => this.handleDisplayMenuChange(true)} >
                <i className="material-icons icon-left-align">arrow_back</i> <h6 className="back-button-text">back</h6>
            </button>
        )
    }
}

export default BackButton;
