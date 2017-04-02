import React                from 'react'
import styled               from 'styled-components'
import Wrapper              from './Wrapper'
import { colors }           from '../../constants'

const ColorDot = styled.div`
    border-radius: 50%;
    vertical-align: baseline;
    margin-right: 4px;
    height: 11px;
    width: 11px;
    background-color: ${colors.statusGreen};
`;

const StudioStatus = (props) => {

    return (
        <Wrapper {...props}>
            <ColorDot />
        </Wrapper>
    )
}

export default StudioStatus;
