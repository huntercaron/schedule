import React               from 'react'
import Wrapper             from './Wrapper'

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
                <button className="month-controls" style={monthNavStyle} onClick={() => this.handleCurrentMonthChange(this.props.currentMonth.clone().subtract(1, "months"))} >
                    <i className="material-icons">navigate_before</i>
                </button>
                <h4 className="current-month" onClick={this.handleViewMonthChange}>{this.props.currentMonth.format("MMMM Y")} <i className="material-icons" style={openMonthArrowStyle} aria-hidden="true">arrow_drop_down</i> </h4>
                <button className="month-controls" style={monthNavStyle} onClick={() => this.handleCurrentMonthChange(this.props.currentMonth.clone().add(1, "months"))}>
                    <i className="material-icons">navigate_next</i>
                </button>
            </Wrapper>
        );
    }
}

export default MonthControls;
