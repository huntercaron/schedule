import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import StudioMenu                               from '../StudioMenu'
import StudioPage                               from '../StudioPage'
import MemberInfo                               from '../MemberInfo'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: true
        }

        this.handleViewAllChange = this.handleViewAllChange.bind(this);
        this.handleDisplayMemberInfoChange = this.handleDisplayMemberInfoChange.bind(this);
    }

    handleViewAllChange(view) {
        this.props.onViewAllChange(view);
    }

    handleDisplayMemberInfoChange(view) {
        this.props.onDisplayMemberInfoChange(view);
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
