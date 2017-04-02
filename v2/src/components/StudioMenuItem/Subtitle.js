import styled               from 'styled-components';
import { colors }           from '../../constants';

export default styled.h4`
    display: inline-block;
    width: 100%;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    font-size: 1.2rem;
    font-family: 'MaisonMono', monospace;
    color: ${colors.midGrey};
    font-weight: lighter;
`;
