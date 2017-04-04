import styled                       from 'styled-components';
import { shadows, breakpoints }          from '../../constants';

export default styled.section`
    background-color: white;
    box-shadow: ${shadows.diffuse};
    width: 100%;
    padding: 26px 4%;
    margin-bottom: 16px;

    @media screen and (min-width: ${breakpoints.tablet}) {

    }
`;
