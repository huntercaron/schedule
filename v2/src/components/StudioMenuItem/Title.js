import styled               from 'styled-components';
import { colors, breakpoints }           from '../../constants';

export default styled.h4`
    width: 100%;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.darkGrey};

    font-size: 1.6rem;
    text-align: center;

    @media screen and (min-width: ${breakpoints.notSmall}) {
        font-size: 2.4rem;
        text-align: left;

    }

`;
