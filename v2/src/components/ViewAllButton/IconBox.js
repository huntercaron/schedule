import styled               from 'styled-components';
import { colors }           from '../../constants';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    i {
        color: ${colors.darkGrey};
        font-size: 48px;
    }
`;
