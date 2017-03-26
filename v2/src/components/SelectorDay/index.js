import React, { Component }                     from 'react';
import moment                                   from 'moment'
import InnerWrapper                             from './InnerWrapper'
import WrapperLink                              from './WrapperLink'

class SelectorDay extends Component {
    constructor(props) {
        super(props);
        this.handleSelectedDateChange = this.handleSelectedDateChange.bind(this);
    }

    handleSelectedDateChange(e) {
        this.props.onSelectedDateChange();
    }

    render () {
        let selectedDay = (this.props.selectedDate.format("D") === this.props.day.format("D") && (this.props.selectedDate.format("M") === this.props.day.format("M"))) ? "selected-day" : "";
        let notThisMonth = (this.props.currentMonth.month() !== this.props.day.month()) ? "not-current-month" : "";
        let today = (moment().format("D") === this.props.day.format("D") && (moment().format("M") === this.props.day.format("M"))) ? "selector-day-today" : "";

        return (
            <WrapperLink to={`${this.props.day.format('YYYY[-]MM[-]DD')}`} replace
                data-day={this.props.day.format()}
                onClick={this.handleSelectedDateChange}
                className={`selector-day ${selectedDay} ${notThisMonth} ${today}`}>

                <InnerWrapper>
                    {/*<p className="day-of-week day-info">{this.props.day.format("ddd")}</p>*/}
                    <h4 className="day-num day-info">{this.props.day.format("D")}</h4>
                </InnerWrapper>

            </WrapperLink>
        )
    }
}

export default SelectorDay;
