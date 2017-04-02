import styled               from 'styled-components';
import { colors, shadows }           from '../../constants';

export default styled.div`
    width: 99%;
    height: 100%;
    position: relative;
    box-shadow: ${shadows.diffuse};
    margin-left: 1%;



    &.available {
        background-color: ${colors.statusGreen};
        box-shadow: ${shadows.diffuseColor(colors.statusGreen)};
    }

    &.booked {
        background-color: ${colors.statusRed};
    }

    &.closed {
        display: none;
    }


`;
