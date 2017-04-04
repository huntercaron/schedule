import styled               from 'styled-components';
import { colors }           from '../../constants';

//sched-col

export default styled.div`
    text-align: right;
    font-size: 1.2rem;
    height: 25px;
    color: ${colors.textLight};

    margin-left: 1%;

    &.half-hour {
        opacity: 0;
    }
`;
