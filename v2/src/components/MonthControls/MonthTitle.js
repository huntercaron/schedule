import styled               from 'styled-components';
import { colors }           from '../../constants';

export default styled.h5`
    color: ${colors.darkGrey};
    text-align: center;
    flex: 1;
    font-weight: 600;
    flex-basis: 100px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-variant-numeric: tabular-nums;
    -moz-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
`;
