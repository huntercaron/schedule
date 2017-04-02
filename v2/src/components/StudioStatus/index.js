import React                from 'react'
import styled               from 'styled-components'
import Wrapper              from './Wrapper'
import { colors }           from '../../constants'

const ColorDot = styled.div`
    border-radius: 50%;
    padding-top: 8px;
    margin-right: 4px;
    height: 12px;
    width: 12px;
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
