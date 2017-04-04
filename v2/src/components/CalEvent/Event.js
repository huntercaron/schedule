import styled               from 'styled-components';
import { colors, shadows, breakpoints }           from '../../constants';

export default styled.div`
    width: 99%;
    height: calc(100% - 4px);
    position: relative;
    box-shadow: ${shadows.diffuse};
    margin-left: 1%;
    border-radius: 3px;
    display: flex;
    max-width: 400px;
    margin: auto;
    justify-content: center;
    padding-top: 12px;


    &.available {
        background-color: ${"#A7CFF5"};
        box-shadow: ${shadows.diffuseColor("#A7CFF5")};
    }

    &.booked {
        background-color: ${colors.accentColor};
        box-shadow: ${shadows.diffuseColor(colors.accentColor)};
    }

    &.event {
        background-color: ${"#AFB7D4"};
        box-shadow: ${shadows.diffuseColor("#AFB7D4")};
    }

    &.closed {
        display: none;
    }

    @media screen and (min-width: ${breakpoints.notSmall}) {

    }

`;
