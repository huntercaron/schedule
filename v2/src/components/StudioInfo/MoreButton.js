import React                from 'react';
import styled               from 'styled-components';
//import { colors }           from '../../constants';
import Icon                 from '../../components/Icon';

const StyledButton = styled.button`
    margin-top: 4px;
    display: ${props => props.show ? "block" : "block"}

    i {
        color: green;
        transform: rotate(${props => props.show ? "0deg" : "90deg"});
    }
`;

const MoreButton = (props) => {
    return (
        <StyledButton {...props}>
            <Icon icon="arrow_drop_down"/> <p>{props.text}</p>
        </StyledButton>
    )
}

export default MoreButton;
