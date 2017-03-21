import React                from 'react';
import styled               from 'styled-components';
import BackButton           from '../../components/BackButton'
import Wrapper              from './Wrapper'
import Title                from './Title'

const HeaderArea = ({text, ...props}) => {
    return (
        <Wrapper {...props}>
            {/* <BackButton onDisplayMenuChange={this.handleDisplayMenu}/> */}
            <BackButton />

            <Title>
                {text}
            </Title>
        </Wrapper>
    )
}

export default HeaderArea;
