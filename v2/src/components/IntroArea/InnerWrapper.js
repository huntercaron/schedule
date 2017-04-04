import styled                       from 'styled-components';
import { shadows, breakpoints, animations }          from '../../constants';

export default styled.section`
    background-color: white;
    max-width: 780px;
    margin: auto;
    animation: ${animations.fadeIn} ${animations.generalCurve} 0.45s forwards;

`;
