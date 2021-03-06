import styled                       from 'styled-components';
import { colors, shadows }          from '../../constants';

export default styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 2px;
    opacity: 0;

    border-top: 1px solid ${colors.midGrey};
    display: none;
`;
