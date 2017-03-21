import React, { Component }                     from 'react';
import BackButton                               from '../../components/BackButton'
import Wrapper                                  from './Wrapper'

class StudioPage extends Component {
    render() {
        const { studios } = this.props.data || [];

        return(
            <Wrapper>
                <BackButton />
            </Wrapper>
        );
    }
}

export default StudioPage;
