import styled               from 'styled-components';
import { colors }           from '../../constants';

export default styled.h4`
    color: ${colors.darkGrey};
    text-align: center;
    flex: 1;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;

    font-variant-numeric: tabular-nums;
    -moz-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
`;
