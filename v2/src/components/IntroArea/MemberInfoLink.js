import React                                    from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled                                   from 'styled-components';
import Icon                                     from '../../components/Icon'
import { colors }                              from '../../constants'

const StyledLink = styled(Link)`
    margin-top: 4px;
    color: ${colors.darkGrey};
    text-decoration: none;

    i {
        font-size: 24px;
        vertical-align: top;
        line-height: 1.5rem;
    }

    h4 {
        font-weight: 600;
        vertical-align: text-bottom;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.1px;
        font-size: 1.2rem;
        font-family: 'MaisonMono', monospace;
    }
`;

const MemberInfoLink = (props) => {
    return (
        <StyledLink to="/member-info" {...props}>
            <h4><Icon icon="info_outline"/> Become a member</h4>
        </StyledLink>
    )
}

export default MemberInfoLink;
