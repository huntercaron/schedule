var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import moment from 'moment';
import Wrapper from './Wrapper';
import MonthControls from '../MonthControls';
import SelectorWeek from '../SelectorWeek';

class DateSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewMonth: false,
            currentMonth: this.props.selectedDate
        };

        this.handleSelectedDateChange = this.handleSelectedDateChange.bind(this);
        this.handleCurrentMonth = this.handleCurrentMonth.bind(this);
        this.handleViewMonth = this.handleViewMonth.bind(this);
    }

    handleSelectedDateChange(newDate) {
        this.props.onSelectedDateChange();
    }

    handleCurrentMonth(newMonth) {
        this.setState({
            currentMonth: newMonth
        });
    }

    handleViewMonth(view) {
        view = !this.state.viewMonth;
        if (view === false) {
            this.setState({
                currentMonth: this.props.selectedDate
            });
        }

        this.setState({
            viewMonth: view
        });
    }

    render() {
        let day = moment().month(parseInt(this.state.currentMonth.format("M") - 1, 10)).date(0).startOf("week");
        let currentMonth = this.state.currentMonth.clone();
        let weekdays = [];
        let scope = this;

        while (day.month() <= currentMonth.month() || day.format("M") === 12 && currentMonth.format("M") === 1) {
            weekdays.push(day);
            day = day.clone().add(1, 'w');
            if (weekdays.length > 32) break;
        }

        // so what you are trying to do is instead of using the state for the current date you are tyring to pull from the ulr
        // each date item will now be a link to a url of that date NO STATE! WHOOop

        //should get date be a component? or a reusable thing

        //just get the date, turn it into a moment then replace all the state stuff

        return _jsx(Wrapper, {}, void 0, _jsx(MonthControls, {
            currentMonth: this.state.currentMonth,
            onCurrentMonthChange: this.handleCurrentMonth,
            viewMonth: this.state.viewMonth,
            onViewMonthChange: this.handleViewMonth
        }), _jsx('div', {
            className: 'selector-cal'
        }, void 0, _jsx('div', {
            className: 'day-of-week-box'
        }, void 0, _jsx('p', {
            className: 'day-of-week day-info'
        }, void 0, moment().day(0).format("ddd")), _jsx('p', {
            className: 'day-of-week day-info'
        }, void 0, moment().day(1).format("ddd")), _jsx('p', {
            className: 'day-of-week day-info'
        }, void 0, moment().day(2).format("ddd")), _jsx('p', {
            className: 'day-of-week day-info wed'
        }, void 0, moment().day(3).format("ddd")), _jsx('p', {
            className: 'day-of-week day-info'
        }, void 0, moment().day(4).format("ddd")), _jsx('p', {
            className: 'day-of-week day-info'
        }, void 0, moment().day(5).format("ddd")), _jsx('p', {
            className: 'day-of-week day-info'
        }, void 0, moment().day(6).format("ddd"))), this.state.viewMonth ? weekdays.map(function (weekday, i) {
            return _jsx(SelectorWeek, {
                selectedDate: scope.props.selectedDate,
                currentMonth: scope.state.currentMonth,
                startDate: weekday.startOf('week'),
                endDate: weekday.clone().startOf('week').add(6, 'd'),
                onSelectedDateChange: scope.handleSelectedDateChange
            }, i);
        }) : _jsx(SelectorWeek, {
            selectedDate: scope.props.selectedDate,
            currentMonth: scope.state.currentMonth,
            startDate: this.props.selectedDate.clone().startOf('week'),
            endDate: this.props.selectedDate.clone().startOf('week').startOf('week').add(6, 'd'),
            onSelectedDateChange: this.handleSelectedDateChange
        })));
    }
}

export default DateSelector;
