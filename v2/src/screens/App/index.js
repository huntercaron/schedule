import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactCSSTransitionGroup                  from 'react-addons-css-transition-group'
import moment                                   from 'moment'
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
            selectedDate: moment(),
            selectedStudio: 0,
            viewAll: false,
            displayMenu: true,
            displayMemberInfo: false,
            studios: studiosData
        };

        this.handleSelectedStudio = this.handleSelectedStudio.bind(this);
        this.handleViewAll = this.handleViewAll.bind(this);
        this.handleDisplayMenu = this.handleDisplayMenu.bind(this);
        this.handleDisplayMemberInfo = this.handleDisplayMemberInfo.bind(this);
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

    handleSelectedStudio(studio) {
        this.setState({
            selectedStudio: studio,
            viewAll: false,
            displayMenu: false,
            displayMemberInfo: false
        })
    }

    handleDisplayMenu(view) {
        this.setState({
            displayMenu: view
        })
    }

    handleViewAll(view) {
        this.setState({
            viewAll: view,
            displayMenu: false,
            displayMemberInfo: false
        })
    }


    handleDisplayMemberInfo(view) {
        this.setState({
            displayMemberInfo: view,
            displayMenu: false
        });
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
