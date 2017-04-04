import React, {Component}                       from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled                                   from 'styled-components'
import Icon                                     from '../Icon'
import { colors }                               from '../../constants';


const Button = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: ${colors.darkGrey};
    margin-top: 9px;
    margin-left: 8px;

    a, i {
        text-decoration: none;
        display: inline-block;
    }
`;

const AccessText = styled.p`
    position: absolute;
    visibility: hidden;
`

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
            <StyledLink to="/app/">
                <Button>
                    <Icon icon="arrow_back"/> <AccessText>back</AccessText>
                </Button>
            </StyledLink>
        )
    }
}

export default BackButton;
