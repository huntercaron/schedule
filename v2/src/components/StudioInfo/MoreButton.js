import React                from 'react';
import styled               from 'styled-components';
import { colors }           from '../../constants';
import Icon                 from '../../components/Icon';

const StyledButton = styled.button`
    margin-top: 0;

    display: ${props => props.show ? "flex" : "flex"};
    justify-content: center;
    align-items: center;

    color: ${colors.textLight};
    font-weight: 300;

    outline: none;
    border: none;
    background-color: transparent;

    p {
        margin: 0;
    }

    i {
        transform: rotate(${props => props.show ? "180deg" : "0deg"});
    }
`;

const MoreButton = (props) => {
    return (
        <StyledButton {...props}>
            <p>{props.text}</p>
            <Icon icon="arrow_drop_down"/>
        </StyledButton>
    )
}

export default MoreButton;
