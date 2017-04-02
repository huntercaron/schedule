import React, {Component}                       from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled                                   from 'styled-components'
import Icon                                     from '../Icon'

const Button = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;

    a, i {
        text-decoration: none;
        display: inline-block;
    }
`;

const StyledLink = styled(Link)`
    position: absolute;
    left: 0;
    top: 0;
`

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
            <StyledLink to="/">
                <Button>
                    <Icon icon="arrow_back"/> <h6 className="back-button-text">back</h6>
                </Button>
            </StyledLink>
        )
    }
}

export default BackButton;
