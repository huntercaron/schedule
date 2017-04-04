import styled               from 'styled-components';
import { animations }           from '../../constants';

export default styled.section`
    flex: 1;
    width: 100%;
    position: relative;
    opacity: 0;

    animation: ${animations.fadeIn} ${animations.generalCurve} 0.5s 0.3s forwards;
`;
