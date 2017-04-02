import styled               from 'styled-components';
import { colors, shadows }           from '../../constants';

export default styled.div`
    width: 99%;
    height: calc(100% - 4px);
    position: relative;
    box-shadow: ${shadows.diffuse};
    margin-left: 1%;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;


    &.available {
        background-color: ${colors.statusGreen};
        box-shadow: ${shadows.diffuseColor(colors.statusGreen)};
    }

    &.booked {
        background-color: ${colors.accentColor};
        box-shadow: ${shadows.diffuseColor(colors.accentColor)};
    }

    &.closed {
        display: none;
    }


`;
