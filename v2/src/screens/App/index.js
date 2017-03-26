import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route }       from 'react-router-dom'
import StudioMenu                               from '../StudioMenu'
import StudioPage                               from '../StudioPage'
import ViewAllPage                              from '../ViewAllPage'
import MemberInfo                               from '../MemberInfo'
import studiosData                              from '../../../data/times.json'
import Wrapper                                  from './Wrapper'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: studiosData
        };
    }

    componentDidMount() {
        /*
        fetch("http://qep.today/data/times.json")
        .then((response) => response.json())
        .then((responseJson) => {
            console.log( responseJson);
            this.setState({
                studios: responseJson
            });
        })
        .catch((error) => {
            console.error(error);
        });
        */
    }

    render() {
        return(
            <Router>
                {this.state.studios && (

                    <Wrapper>
                        <Route exact path="/" render={() => <StudioMenu studios={this.state.studios} /> }/>

                        <Route path="/member-info" component={MemberInfo} />

                        <Route path="/view-all/date/:year-:month-:day" render={({ match }) => (
                            <ViewAllPage match={match} studios={this.state.studios} />
                        )} />

                        <Route path="/studio/:facultyClass/date/:year-:month-:day" render={({ match }) => (
                            <StudioPage match={match} studio={this.state.studios.find(s => s.facultyClass === match.params.facultyClass )}/>
                        )} />
                    </Wrapper>

                )}
            </Router>
        );
    }
}

export default App;
