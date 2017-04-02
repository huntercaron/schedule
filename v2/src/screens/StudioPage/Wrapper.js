import styled               from 'styled-components';
import { breakpoints }           from '../../constants';

export default styled.section`
    width: 100%;
    background-color: white;

    @media screen and (min-width: ${breakpoints.tablet}) {
        display: flex;
    }

`;
