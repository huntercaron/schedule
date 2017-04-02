import styled               from 'styled-components';
import { colors, breakpoints }           from '../../constants';

export default styled.section`
    background-color: white;
    width: 100%;

    @media screen and (min-width: ${breakpoints.tablet}) {
        border-right: 2px solid ${colors.lightGrey};
    }
`;
