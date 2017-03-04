var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var times = [];
var eventHeight = 30;

var startOfWeek = moment().startOf('week');
var endOfWeek = moment().endOf('week');

var days = [];
var day = startOfWeek;

while (day <= endOfWeek) {
    days.push(day.toDate());
    day = day.clone().add(1, 'd');
}

console.log(days);

class CalEvent extends React.Component {
    render() {
        let eventInfo;
        if (this.props.time.status) {
            eventInfo = _jsx('p', {}, void 0, this.props.time.statusString);
        } else {
            eventInfo = _jsx('p', {}, void 0, this.props.time.statusString);
        }
        return _jsx('div', {
            style: this.props.style,
            className: `sched-row cal-event-box`
        }, void 0, _jsx('div', {
            className: `cal-event ${this.props.time.statusString}`
        }, void 0, eventInfo));
    }
}

class Studio extends React.Component {
    render() {
        let scope = this;
        let count = 1;
        console.log(scope.props.data);
        return _jsx('div', {
            className: 'studio-col'
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
        return _jsx('div', {
            className: 'sched-main sched-col'
        }, void 0, this.props.viewAll ? this.props.data.map(function (studio, i) {
            return _jsx(Studio, {
                className: 'sched-row',
                data: studio
            });
        }) : _jsx(Studio, {
            className: 'sched-row',
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

        return _jsx('div', {
            className: 'sched-col'
        }, void 0, calTimes.map(function (time, i) {
            let hourType = !Number.isInteger(time.number) ? "half-hour" : "full-hour";
            return _jsx('div', {
                className: `time sched-row ${hourType}`,
                id: `${time.number}-time`
            }, void 0, time.formatted);
        }));
    }
}

var _ref = _jsx('div', {
    className: 'day'
}, void 0);

class SelectorDay extends React.Component {
    render() {
        return _ref;
    }
}

var _ref2 = _jsx('br', {});

class SelectorWeek extends React.Component {
    render() {
        let startOfWeek = moment().startOf('week');
        let endOfWeek = moment().endOf('week');

        let days = [];
        let day = this.props.startDate;

        while (day <= endOfWeek) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
        }

        return _jsx('div', {
            className: 'selector-week'
        }, void 0, days.map(function (day) {
            return _jsx('p', {}, void 0, day, _ref2);
        }));
    }
}

class DateSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewMonth: false
        };
    }

    render() {
        let month = moment();
        console.log(month.startOf("week").toDate());
        return _jsx('div', {
            className: 'date-selector'
        }, void 0, _jsx('div', {
            className: 'selector-cal'
        }, void 0, this.state.viewMonth ? _jsx(Studio, {
            startDate: moment().startOf('month'),
            endDate: moment().startOf('month').add(6, 'd')
        }) : _jsx(Studio, {
            startDate: moment().startOf('month'),
            endDate: moment().startOf('month').add(6, 'd')
        })));
    }
}

var _ref3 = _jsx('br', {});

class StudioInfo extends React.Component {
    render() {
        return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, this.props.data[this.props.selected].facultyName), _jsx('div', {}, void 0, this.props.data[this.props.selected].facultyInfo.split('\n').map(function (text) {
            return _jsx('p', {}, void 0, text, _ref3);
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
        return _jsx('div', {
            className: 'app-inner'
        }, void 0, _jsx('div', {
            className: 'top-area'
        }, void 0, this.state.studios.length > 0 && _jsx(StudioInfo, {
            data: this.state.studios,
            selected: this.state.selected,
            viewAll: this.state.viewAll
        }), _ref4), _jsx('div', {
            className: 'schedule'
        }, void 0, _jsx('div', {
            className: 'sched-body'
        }, void 0, _ref5, this.state.studios.length > 0 && _jsx(CalendarBody, {
            data: this.state.studios,
            selected: this.state.selected,
            viewAll: this.state.viewAll
        }))));
    }
}

ReactDOM.render(_jsx(StudioCalendar, {}), document.getElementById('root'));
