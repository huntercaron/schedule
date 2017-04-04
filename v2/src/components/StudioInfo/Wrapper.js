import styled               from 'styled-components';
import { animations }       from '../../constants'

export default styled.section`
    width: 100%;

    padding: 0 calc(16px + 5%);

    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: 0;

    animation: ${animations.fadeIn} ${animations.generalCurve} 0.45s 0.15s forwards;
`;
