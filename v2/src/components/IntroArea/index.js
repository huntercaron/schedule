import React                from 'react';
import Wrapper              from './Wrapper'
import Title                from './Title'
import SubTitle             from './SubTitle'
import MemberInfoLink       from './MemberInfoLink'


const IntroArea = ({text, title, ...props}) => {
    return (
        <Wrapper {...props}>
            <Title>
                {title}
            </Title>

            <SubTitle>
                {text}
            </SubTitle>

            <MemberInfoLink />
        </Wrapper>
    )
}

export default IntroArea;
