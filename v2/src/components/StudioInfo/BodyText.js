import styled from 'styled-components'

export default styled.div`
    display: ${props => props.show ? "block" : "none"};
    p {
        max-width: 550px;
        line-height: 1.7;
        padding-left: 10px;
        margin-left: auto;
        margin-right: auto;
    }

`;
