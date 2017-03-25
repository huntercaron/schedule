import React                from 'react'
import moment               from 'moment'
import Wrapper              from './Wrapper'
import MonthControls        from '../MonthControls'
import SelectorWeek         from '../SelectorWeek'

class DateSelector extends React.Component {
    constructor(props) {
        super(props);
        let currentMonth = moment();

        this.state = {
            viewMonth: false,
            currentMonth: moment()
        };

        this.handleSelectedDateChange = this.handleSelectedDateChange.bind(this);
        this.handleCurrentMonth = this.handleCurrentMonth.bind(this);
        this.handleViewMonth = this.handleViewMonth.bind(this);
    }

    handleSelectedDateChange(newDate) {
        this.props.onSelectedDateChange();
        this.setState({
            currentMonth: newDate
        })
    }

    handleCurrentMonth(newMonth) {
        this.setState({
            currentMonth: newMonth
        });
    }

    handleViewMonth(view) {
        view = !this.state.viewMonth;
        if (view == false) {
            this.setState({
                 currentMonth: this.props.selectedDate
            });
        }

        this.setState({
             viewMonth: view
        });
    }

    render () {
        let weekCount = 0;
        let day = moment().month(parseInt(this.state.currentMonth.format("M")-1)).date(0).startOf("week");
        let currentMonth = this.state.currentMonth.clone();
        let weekdays = [];
        let scope = this;

        while (day.month() <= currentMonth.month() || (day.format("M") == 12 && currentMonth.format("M") == 1)) {
            weekdays.push(day);
            day = day.clone().add(1, 'w');
            if (weekdays.length > 32)
                break;
        }

        // so what you are trying to do is instead of using the state for the current date you are tyring to pull from the ulr
        // each date item will now be a link to a url of that date NO STATE! WHOOop

        //should get date be a component? or a reusable thing

        //just get the date, turn it into a moment then replace all the state stuff

        return (
            <Wrapper>

                <MonthControls
                    currentMonth={this.state.currentMonth}
                    onCurrentMonthChange={this.handleCurrentMonth}
                    viewMonth={this.state.viewMonth}
                    onViewMonthChange={this.handleViewMonth}/>

                <div className="selector-cal">
                    <div className="day-of-week-box">
                        <p className="day-of-week day-info">{moment().day(0).format("ddd")}</p>
                        <p className="day-of-week day-info">{moment().day(1).format("ddd")}</p>
                        <p className="day-of-week day-info">{moment().day(2).format("ddd")}</p>
                        <p className="day-of-week day-info wed">{moment().day(3).format("ddd")}</p>
                        <p className="day-of-week day-info">{moment().day(4).format("ddd")}</p>
                        <p className="day-of-week day-info">{moment().day(5).format("ddd")}</p>
                        <p className="day-of-week day-info">{moment().day(6).format("ddd")}</p>
                    </div>


                    {this.state.viewMonth ? (
                        weekdays.map(function(weekday, i){
                            return <SelectorWeek
                                    selectedDate={scope.props.selectedDate}
                                    currentMonth={scope.state.currentMonth}
                                    startDate={weekday.startOf('week')}
                                    endDate={weekday.clone().startOf('week').add(6, 'd')}
                                    onSelectedDateChange={scope.handleSelectedDateChange}
                                    key={i}
                                    />
                        })
                        ) : (
                             <SelectorWeek
                             selectedDate={scope.props.selectedDate}
                             currentMonth={scope.state.currentMonth}
                             startDate={this.props.selectedDate.clone().startOf('week')}
                             endDate={this.props.selectedDate.clone().startOf('week').startOf('week').add(6, 'd')}
                             onSelectedDateChange={this.handleSelectedDateChange}
                             />
                        )}
                </div>


            </Wrapper>
        )
    }
}


export default DateSelector;
