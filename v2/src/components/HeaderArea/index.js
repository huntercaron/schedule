import React                from 'react';
import styled               from 'styled-components';
import BackButton           from '../../components/BackButton'
import Wrapper              from './Wrapper'
import Title                from './Title'

const HeaderArea = ({text, ...props}) => {
    return (
        <Wrapper {...props}>
            <BackButton />

            <Title>
                {text}
            </Title>

            {props.children}
        </Wrapper>
    )
}

export default HeaderArea;
