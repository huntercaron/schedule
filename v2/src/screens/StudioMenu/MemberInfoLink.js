import React                                    from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled                                   from 'styled-components';
import Icon                                     from '../../components/Icon'

const StyledLink = styled(Link)`
    margin-top: 4px;
`;

const MemberInfoLink = (props) => {
    return (
        <StyledLink to="/member-info" {...props}>
            <h4>Become a member <Icon icon="info_outline"/></h4>
        </StyledLink>
    )
}

export default MemberInfoLink;
