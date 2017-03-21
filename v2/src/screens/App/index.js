import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import moment                                   from 'moment'
import StudioMenu                               from '../StudioMenu'
import StudioPage                               from '../StudioPage'
import MemberInfo                               from '../MemberInfo'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: [],
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
        fetch("../../../data/times.json", {
          method: 'get'
        }).then(res => {
            const studios = res.data;
            console.log(studios);
            this.setState({
                studios: studios
            });
        }).catch(err => {
        	console.log(err);
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
        const { studios } = this.props.data || [];

        return(
            <Router>
                <div>
                    <Route exact path="/" component={StudioMenu} />
                    <Route path="/studio" component={StudioPage} />
                    <Route path="/member-info" component={MemberInfo} />
                </div>
            </Router>
        );
    }
}

export default App;
