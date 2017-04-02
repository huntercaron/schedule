// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled                                   from 'styled-components';
import { colors, shadows }                      from '../../constants';

export default styled(Link)`
    box-shadow: ${shadows.diffuse};
    margin: 8px;
    height: 85px;
    width: 40%;
    display: flex;
    text-decoration: none;
    background-color: white;
    border-radius: 2px;

    &:hover {
        background-color: ${colors.ultraLightGrey};
        box-shadow: ${shadows.diffuseHover};
    }
`;
