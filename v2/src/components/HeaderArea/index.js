import React                from 'react';
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
