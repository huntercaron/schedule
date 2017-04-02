import React                from 'react';
import styled               from 'styled-components';
import { colors }           from '../../constants'
import Icon                 from '../Icon'

const StyledButton = styled.button`
    outline: none;
    border: none;
    background-color: white;
    flex: 1;

    &:active {
        background-color: ${colors.lightGrey};
    }
`

const MonthArrow = (props) => {
    return (
        <StyledButton {...props}>
            <Icon icon={`navigate_${props.side}`}/>
        </StyledButton>
    )
}

export default MonthArrow;
