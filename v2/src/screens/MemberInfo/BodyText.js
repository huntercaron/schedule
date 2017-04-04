import React from 'react';
import styled               from 'styled-components';

const Info = styled.div`
    margin: auto;
    max-width: 600px;

    h3 {
        margin-top: 40px;
        margin-bottom: 8px;
        font-size: 2.4rem;
        font-weight: 600;
    }

    li {
        margin-bottom: 18px;
    }

    p {
        margin-bottom: 18px;
    }
`

const BodyText = (props) => {
    return (
        <Info {...props}>

        </Info>
    )
}

export default BodyText;
