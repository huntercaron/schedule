import styled                                   from 'styled-components';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { shadows, breakpoints }                 from '../../constants';

export default styled(Link)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;
    top: -84px;

    img {
        width: 52px;
        box-shadow: ${shadows.diffuse};
        border-radius: 50%;

        @media screen and (min-width: ${breakpoints.notSmall}) {
            width: 64px;
        }
    }
`;
