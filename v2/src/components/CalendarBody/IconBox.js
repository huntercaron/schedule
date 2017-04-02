import styled                                   from 'styled-components';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { shadows }                              from '../../constants';

export default styled(Link)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;
    top: -84px;

    img {
        width: 64px;
        box-shadow: ${shadows.diffuse};
        border-radius: 50%;
    }
`;
