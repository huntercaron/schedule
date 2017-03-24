import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import moment                                   from 'moment'
import StudioMenu                               from '../StudioMenu'
import StudioPage                               from '../StudioPage'
import ViewAllPage                              from '../ViewAllPage'
import MemberInfo                               from '../MemberInfo'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: moment(),
            selectedStudio: 0,
            viewAll: false,
            displayMenu: true,
            displayMemberInfo: false
        };

        this.handleSelectedStudio = this.handleSelectedStudio.bind(this);
        this.handleViewAll = this.handleViewAll.bind(this);
        this.handleDisplayMenu = this.handleDisplayMenu.bind(this);
        this.handleSelectedDate = this.handleSelectedDate.bind(this);
        this.handleDisplayMemberInfo = this.handleDisplayMemberInfo.bind(this);
    }

    componentDidMount() {
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

    handleSelectedDate(newDate) {
        this.setState({
            currentMonth: newDate,
            selectedDate: newDate
        });
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
                    <div>
                        <Route exact path="/" render={() => <StudioMenu studios={this.state.studios} /> }/>
                        <Route path="/view-all" component={ViewAllPage} />
                        <Route path="/member-info" component={MemberInfo} />

                        <Route path="/studio/:facultyClass" render={({ match }) => (
                            <StudioPage studio={this.state.studios.find(s => s.facultyClass === match.params.facultyClass )}/>
                        )} />
                    </div>
                )}
            </Router>
        );
    }
}

export default App;
