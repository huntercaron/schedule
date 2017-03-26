import React               from 'react'
import Wrapper             from './Wrapper'
import SelectorDay         from '../SelectorDay'

class SelectorWeek extends React.Component {
    render () {
        let days = [];
        let day = this.props.startDate;
        let scope = this;

        while (day <= this.props.endDate) {
            days.push(day);
            day = day.clone().add(1, 'd');
        }

        let selectedWeek = (this.props.selectedDate.clone().startOf("week").format("W") === this.props.startDate.format("W")) ? "selected-week" : "";

        return (
            <Wrapper className={`${selectedWeek}`}>
                {days.map(function(day, i){
                    return <SelectorDay
                            selectedDate={scope.props.selectedDate}
                            currentMonth={scope.props.currentMonth}
                            day={day}
                            key={i}
                            onSelectedDateChange={scope.props.onSelectedDateChange}
                            />
                })}
            </Wrapper>
        )
    }
}

export default SelectorWeek;
