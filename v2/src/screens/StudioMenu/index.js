import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MemberInfo                               from '../MemberInfo'
import StudioMenuItem                           from '../../components/StudioMenuItem'
import IntroArea                                from '../../components/IntroArea'
import Wrapper                                  from './Wrapper'
import MenuBox                                  from './MenuBox'
import MemberInfoLink                           from './MemberInfoLink'

class StudioMenu extends Component {
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
            <Wrapper>
                <IntroArea
                    title="Good Afternoon"
                    text="Select a studio to see it's availibility." />

                <MenuBox>
                    {studios ? (
                        studios.map((studio, i) => {
                            return <StudioMenuItem
                                    studioName={studio.facultyName}
                                    studioClass={studio.facultyClass}
                                    studioTimes={studio.days[0]}
                                    studioNum={i}
                                    onSelectedStudioChange={this.props.onSelectedStudioChange}/>
                        })
                    ) : (
                        <div>Loading...</div>
                    )}

                    <StudioMenuItem />

                    <MemberInfoLink />

                </MenuBox>

            </Wrapper>
        );
    }
}

export default StudioMenu;
