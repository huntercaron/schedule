import styled               from 'styled-components';
import { breakpoints }           from '../../constants';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    padding-top: 16px;

    @media screen and (min-width: ${breakpoints.notSmall}) {
        padding: 16px;
    }


`;
