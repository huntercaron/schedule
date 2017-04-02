import styled               from 'styled-components';
import { colors, shadows }           from '../../constants';

export default styled.section`
    margin-top: 36px;
    padding: 8px 0;
    border-top: 2px solid ${colors.lightGrey};
    position: relative;
    z-index: 1;
    box-shadow: 0 10px 16px -6px rgba(0,0,0,0.04);
    background-color: white;
    width: 100%;
`;
