import styled               from 'styled-components';
import { colors, shadows, breakpoints }           from '../../constants';

export default styled.div`
    font-size: 1.2rem;
    color: white;

    @media screen and (min-width:${breakpoints.notSmall}) {
        font-size: 1.8rem;
        font-weight: 600;
    }

`;
