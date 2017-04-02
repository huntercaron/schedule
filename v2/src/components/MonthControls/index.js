import React               from 'react'
import Wrapper             from './Wrapper'
import MonthTitle          from './MonthTitle'
import MonthArrow          from './MonthArrow'

class MonthControls extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrentMonthChange = this.handleCurrentMonthChange.bind(this);
        this.handleViewMonthChange = this.handleViewMonthChange.bind(this);
    }

    handleCurrentMonthChange(month) {
        this.props.onCurrentMonthChange(month)
    }

    handleViewMonthChange(view) {
        this.props.onViewMonthChange(view)
    }

    render() {
        let monthNavStyle = {
            display: this.props.viewMonth ? "block" : "none"
        };

        let openMonthArrowStyle = {
            transform: this.props.viewMonth ? "rotate(180deg)" : "rotate(0deg)"
        };

        return (
            <Wrapper>
                <MonthArrow style={monthNavStyle} onClick={() => this.handleCurrentMonthChange(this.props.currentMonth.clone().subtract(1, "months"))} side="before"/>
                <MonthTitle onClick={this.handleViewMonthChange}>{this.props.currentMonth.format("MMMM Y")} <i className="material-icons" style={openMonthArrowStyle} aria-hidden="true">arrow_drop_down</i> </MonthTitle>
                <MonthArrow style={monthNavStyle} onClick={() => this.handleCurrentMonthChange(this.props.currentMonth.clone().add(1, "months"))} side="next"/>
            </Wrapper>
        );
    }
}

export default MonthControls;
