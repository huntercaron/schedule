import React                from 'react';
import Wrapper              from './Wrapper'
import InnerWrapper         from './InnerWrapper'
import Title                from './Title'
import SubTitle             from './SubTitle'
import MemberInfoLink       from './MemberInfoLink'


const IntroArea = ({text, title, ...props}) => {
    return (
        <Wrapper {...props}>
            <InnerWrapper>
                <Title>
                    {title}
                </Title>

                <SubTitle>
                    {text}
                </SubTitle>

                <MemberInfoLink />
            </InnerWrapper>
        </Wrapper>
    )
}

export default IntroArea;
