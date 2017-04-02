import styled               from 'styled-components';
import { colors }           from '../../constants';

export default styled.div`
    border-radius: 50%;
    width: 36px;
    height: 36px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3px;

    color: ${colors.darkGrey};

    h4:active {
        color: white;
    }

    &:hover {
        background-color: ${colors.accentPastel};
    }

    &.selector-day-today  {
        color: rgb(82, 160, 255);
    }

    &.selector-day-today h4 {
        font-weight: bold !important;
    }


    &.selected-day {
        background-color: ${colors.accentColor};
        color: white;
    }

    .selector-day-inner {
        padding: 4px 0;
    }

`;
