import React, {Component}                       from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled                                   from 'styled-components';

const Button = styled.button`

`;

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
            <Link to="/">
                <Button className="back-button">
                    <i className="material-icons icon-left-align">arrow_back</i> <h6 className="back-button-text">back</h6>
                </Button>
            </Link>
        )
    }
}

export default BackButton;
