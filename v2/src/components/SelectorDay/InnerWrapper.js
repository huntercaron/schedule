import styled               from 'styled-components';
import { colors, shadows, animations }           from '../../constants';

export default styled.div`
    border-radius: 50%;
    width: 36px;
    height: 36px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
    transition: box-shadow ${animations.general},
    background-color ${animations.general};

    color: ${colors.darkGrey};

    h4:active {
        color: white;
    }

    &:hover {
        background-color: ${colors.accentPastel};
    }

    &.selector-day-today  {
        color: ${colors.midGrey};
    }

    &.selector-day-today h4 {
        font-weight: bold !important;
    }


    &.selected-day {
        background-color: ${colors.accentColor};
        box-shadow: ${shadows.diffuseColor(colors.accentColor)};
        color: white;
    }

    &.not-current-month {
        color: ${colors.textLight};]
        opacity: 0.6;
    }

    .selector-day-inner {
        padding: 4px 0;
    }

`;
