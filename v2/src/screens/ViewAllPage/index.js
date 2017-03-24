import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BackButton                               from '../../components/BackButton'
import Wrapper                                  from './Wrapper'

class ViewAllPage extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return(
            <Wrapper>
                <BackButton />


            </Wrapper>
        );
    }
}

export default ViewAllPage;
