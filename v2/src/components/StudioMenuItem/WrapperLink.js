// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled                               from 'styled-components';
import { colors, shadows, breakpoints, animations }         from '../../constants';

export default styled(Link)`
    box-shadow: ${shadows.diffuse};
    margin: 4px;
    width: calc(50% - 8px);
    display: flex;
    text-decoration: none;
    background-color: white;
    border-radius: 2px;

    flex-direction: column;
    height: 128px;
    opacity: 0;

    animation: ${animations.fadeIn} ${animations.generalCurve} 0.8s 0.15s forwards;

    &:hover {
        background-color: ${colors.ultraLightGrey};
        box-shadow: ${shadows.diffuseHover};
    }

    @media screen and (min-width: ${breakpoints.notSmall}) {
        flex-direction: row;

        padding: 0 2%;
    }
`;
