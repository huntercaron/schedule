var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var times = [];
var eventHeight = 24;

class CalEvent extends React.Component {
    render() {
        let eventInfo;
        if (this.props.time.status) {
            eventInfo = _jsx("p", {}, void 0, this.props.time.statusString);
        } else {
            eventInfo = _jsx("p", {}, void 0, this.props.time.statusString);
        }
        return _jsx("div", {
            style: this.props.style,
            className: `sched-row cal-event-box`
        }, void 0, _jsx("div", {
            className: `cal-event ${this.props.time.statusString}`
        }, void 0, eventInfo));
    }
}

class Studio extends React.Component {
    render() {
        let scope = this;
        let count = 1;
        console.log(scope.props.data);
        return _jsx("div", {
            className: "studio-col"
        }, void 0, this.props.data.days[0].times.map(function (time, i) {
            if (i > 11) {
                if (i != scope.props.data.days[0].times.length - 1) {
                    if (scope.props.data.days[0].times[i + 1].statusString != time.statusString || time.statusString == "Closed") {

                        let eventStyle = {
                            height: count * eventHeight + "px"
                        };
                        count = 1;

                        return _jsx(CalEvent, {
                            time: time,
                            className: `sched-row ${time.status}`,
                            status: time.status,
                            style: eventStyle
                        });
                    } else {
                        count++;
                    }
                }
            }
        }));
    }
}

class CalendarBody extends React.Component {
    render() {
        return _jsx("div", {
            className: "sched-main sched-col"
        }, void 0, this.props.viewAll ? this.props.data.map(function (studio, i) {
            return _jsx(Studio, {
                className: "sched-row",
                data: studio
            });
        }) : _jsx(Studio, {
            className: "sched-row",
            data: this.props.data[this.props.selected]
        }));
    }

}

class CalTimes extends React.Component {
    render() {
        let calTimeFormat = moment().hour(6).minute(0);
        let calTimeNum = 6;
        let calTimes = [];

        while (calTimeNum <= 24) {
            calTimes.push({ "formatted": calTimeFormat.format("h:mma"), "number": calTimeNum });
            calTimeNum = calTimeNum + 0.5;
            calTimeFormat.add(30, 'm');
        }

        return _jsx("div", {
            className: "sched-col"
        }, void 0, calTimes.map(function (time, i) {
            let hourType = !Number.isInteger(time.number) ? "half-hour" : "full-hour";
            return _jsx("div", {
                className: `time sched-row ${hourType}`,
                id: `${time.number}-time`
            }, void 0, time.formatted);
        }));
    }
}

class SelectorDay extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedDateChange = this.handleSelectedDateChange.bind(this);
    }

    handleSelectedDateChange(e) {
        this.props.onSelectedDateChange(moment(e.target.closest(".selector-day").getAttribute("data-day")));
    }

    render() {
        let selectedDay = this.props.selectedDate.format("D") === this.props.day.format("D") && this.props.selectedDate.format("M") === this.props.day.format("M") ? "selected-day" : "";
        let notThisMonth = this.props.currentMonth.month() !== this.props.day.month() ? "not-current-month" : "";
        let today = moment().format("D") === this.props.day.format("D") && moment().format("M") === this.props.day.format("M") ? "selector-day-today" : "";

        return _jsx("div", {
            id: this.props.day.format("ddd"),
            "data-day": this.props.day.format(),
            onClick: this.handleSelectedDateChange,
            className: `selector-day ${selectedDay} ${notThisMonth} ${today}`
        }, void 0, _jsx("div", {
            className: "selector-day-inner"
        }, void 0, _jsx("p", {
            className: "day-of-week day-info"
        }, void 0, this.props.day.format("ddd")), _jsx("h4", {
            className: "day-num day-info"
        }, void 0, this.props.day.format("D"))));
    }
}

class SelectorWeek extends React.Component {
    render() {
        let days = [];
        let day = this.props.startDate;
        let scope = this;

        while (day <= this.props.endDate) {
            days.push(day);
            day = day.clone().add(1, 'd');
        }

        let selectedWeek = this.props.selectedDate.clone().startOf("week").format("W") === this.props.startDate.format("W") ? "selected-week" : "";

        return _jsx("div", {
            className: `selector-week ${selectedWeek}`
        }, void 0, days.map(function (day) {
            return _jsx(SelectorDay, {
                selectedDate: scope.props.selectedDate,
                currentMonth: scope.props.currentMonth,
                day: day,
                onSelectedDateChange: scope.props.onSelectedDateChange
            });
        }));
    }
}

var _ref = _jsx("i", {
    className: "fa fa-angle-left fa-2x",
    "aria-hidden": "true"
}, void 0, " ");

var _ref2 = _jsx("i", {
    className: "fa fa-angle-right fa-2x",
    "aria-hidden": "true"
}, void 0, " ");

class MonthControls extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrentMonthChange = this.handleCurrentMonthChange.bind(this);
    }

    handleCurrentMonthChange(month) {
        this.props.onCurrentMonthChange(month);
    }

    render() {
        let scope = this;
        return _jsx("div", {
            className: "month-controls-box"
        }, void 0, _jsx("button", {
            className: "month-controls",
            onClick: () => this.handleCurrentMonthChange(this.props.currentMonth.clone().subtract(1, "months"))
        }, void 0, _ref), _jsx("h3", {
            className: "current-month"
        }, void 0, this.props.currentMonth.format("MMMM Y")), _jsx("button", {
            className: "month-controls",
            onClick: () => this.handleCurrentMonthChange(this.props.currentMonth.clone().add(1, "months"))
        }, void 0, _ref2));
    }
}

class DateSelector extends React.Component {
    constructor(props) {
        super(props);
        let currentMonth = moment();
        this.state = {
            viewMonth: true,
            currentMonth: currentMonth,
            selectedDate: moment().month(parseInt(currentMonth.format("M") - 1))
        };

        this.handleSelectedDate = this.handleSelectedDate.bind(this);
        this.handleCurrentMonth = this.handleCurrentMonth.bind(this);
    }

    handleSelectedDate(newDate) {
        console.log(`selected ${newDate.toDate()}`);
        this.setState({
            currentMonth: newDate,
            selectedDate: newDate
        });
    }

    handleCurrentMonth(newMonth) {
        this.setState({
            currentMonth: newMonth
        });
    }

    render() {
        //UR DOING STUFF HERE TRYING TO FIGURE OUT HOW TO CACULATE THE WEEKS IN THE MONTH
        let weekCount = 0;
        let day = moment().month(parseInt(this.state.currentMonth.format("M") - 1)).date(0).startOf("week");
        let currentMonth = this.state.currentMonth.clone();
        let weekdays = [];
        let scope = this;

        while (day.month() <= currentMonth.month() || day.format("M") == 12 && currentMonth.format("M") == 1) {
            weekdays.push(day);
            day = day.clone().add(1, 'w');
            if (weekdays.length > 32) break;
        }

        return _jsx("div", {
            className: "date-selector"
        }, void 0, _jsx(MonthControls, {
            currentMonth: this.state.currentMonth,
            onCurrentMonthChange: this.handleCurrentMonth
        }), _jsx("div", {
            className: "selector-cal"
        }, void 0, this.state.viewMonth ? weekdays.map(function (weekday) {
            return _jsx(SelectorWeek, {
                selectedDate: scope.state.selectedDate,
                currentMonth: scope.state.currentMonth,
                startDate: weekday.startOf('week'),
                endDate: weekday.clone().startOf('week').add(6, 'd'),
                onSelectedDateChange: scope.handleSelectedDate
            });
        }) : _jsx(SelectorWeek, {
            selectedDate: scope.state.selectedDate,
            startDate: this.state.selectedDate.startOf('week'),
            endDate: this.state.selectedDate.startOf('week').clone().startOf('week').add(6, 'd'),
            onSelectedDateChange: this.handleSelectedDate
        })));
    }
}

var _ref3 = _jsx("br", {});

class StudioInfo extends React.Component {
    render() {
        return _jsx("div", {}, void 0, _jsx("h1", {}, void 0, this.props.data[this.props.selected].facultyName), _jsx("div", {}, void 0, this.props.data[this.props.selected].facultyInfo.split('\n').map(function (text) {
            return _jsx("p", {}, void 0, text, _ref3);
        })));
    }
}

var _ref4 = _jsx(DateSelector, {});

var _ref5 = _jsx(CalTimes, {});

class StudioCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: [],
            selected: 0,
            viewAll: false
        };
    }

    componentDidMount() {
        axios.get("../data/times.json").then(res => {
            const studios = res.data;
            console.log(studios);
            this.setState({
                studios: studios,
                selected: 2,
                viewAll: false
            });
        });
    }

    render() {
        return _jsx("div", {
            className: "app-inner"
        }, void 0, _jsx("div", {
            className: "top-area"
        }, void 0, this.state.studios.length > 0 && _jsx(StudioInfo, {
            data: this.state.studios,
            selected: this.state.selected,
            viewAll: this.state.viewAll
        }), _ref4), _jsx("div", {
            className: "schedule"
        }, void 0, _jsx("div", {
            className: "sched-body"
        }, void 0, _ref5, this.state.studios.length > 0 && _jsx(CalendarBody, {
            data: this.state.studios,
            selected: this.state.selected,
            viewAll: this.state.viewAll
        }))));
    }
}

ReactDOM.render(_jsx(StudioCalendar, {}), document.getElementById('root'));
