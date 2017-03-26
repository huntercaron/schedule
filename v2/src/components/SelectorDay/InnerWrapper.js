import styled               from 'styled-components';
//import { colors }           from '../../constants';

export default styled.div`
    .selector-day-today .selector-day-inner  {
        color: rgb(82, 160, 255);
        border-radius: 6px;
    }

    .selector-day-today .selector-day-inner h4 {
        font-weight: bold !important;
    }


    .selected-day .selector-day-inner {
        background-color: rgba(0,0,0,0.05);
        border-radius: 6px;
    }

    .selector-day-today.selected-day .selector-day-inner  {
        background-color: rgba(0,0,255,0.1);
        border-radius: 6px;
    }

    .selected-day .selector-day-inner {
        background-color: rgba(0,0,0,0.05);
        border-radius: 6px;
    }

    .selector-day-inner {
        padding: 4px 0;
    }

    .selector-day-inner .day-info {

    }
`;
