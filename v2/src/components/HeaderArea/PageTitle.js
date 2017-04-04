import React                from 'react';
import styled               from 'styled-components';
//import { colors }           from '../../constants';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Heading = styled.h6`
    
`;

const PageTitle = ({text, ...props}) => {
    return (
        <Wrapper>
            <h6>{text}</h6>
        </Wrapper>
    )
}

export default PageTitle;
