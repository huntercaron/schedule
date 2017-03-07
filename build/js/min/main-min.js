var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var times = [];
var eventHeight = 24;
let imgUrl = "./images/";

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
    className: "material-icons"
}, void 0, "navigate_before");

var _ref2 = _jsx("i", {
    className: "material-icons"
}, void 0, "navigate_next");

class MonthControls extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrentMonthChange = this.handleCurrentMonthChange.bind(this);
        this.handleViewMonthChange = this.handleViewMonthChange.bind(this);
    }

    handleCurrentMonthChange(month) {
        this.props.onCurrentMonthChange(month);
    }

    handleViewMonthChange(view) {
        this.props.onViewMonthChange(view);
    }

    render() {
        let scope = this;

        let monthNavStyle = {
            display: this.props.viewMonth ? "block" : "none"
        };

        let openMonthArrowStyle = {
            transform: this.props.viewMonth ? "rotate(180deg)" : "rotate(0deg)"
        };

        return _jsx("div", {
            className: "month-controls-box"
        }, void 0, _jsx("button", {
            className: "month-controls",
            style: monthNavStyle,
            onClick: () => this.handleCurrentMonthChange(this.props.currentMonth.clone().subtract(1, "months"))
        }, void 0, _ref), _jsx("h4", {
            className: "current-month",
            onClick: this.handleViewMonthChange
        }, void 0, this.props.currentMonth.format("MMMM Y"), " ", _jsx("i", {
            className: "material-icons",
            style: openMonthArrowStyle,
            "aria-hidden": "true"
        }, void 0, "arrow_drop_down"), " "), _jsx("button", {
            className: "month-controls",
            style: monthNavStyle,
            onClick: () => this.handleCurrentMonthChange(this.props.currentMonth.clone().add(1, "months"))
        }, void 0, _ref2));
    }
}

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
        console.log(`selected ${newDate.toDate()}`);
        this.setState({
            currentMonth: newDate
        });
        this.props.onSelectedDateChange(newDate);
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
            onCurrentMonthChange: this.handleCurrentMonth,
            viewMonth: this.state.viewMonth,
            onViewMonthChange: this.handleViewMonth
        }), _jsx("div", {
            className: "selector-cal"
        }, void 0, this.state.viewMonth ? weekdays.map(function (weekday) {
            return _jsx(SelectorWeek, {
                selectedDate: scope.props.selectedDate,
                currentMonth: scope.state.currentMonth,
                startDate: weekday.startOf('week'),
                endDate: weekday.clone().startOf('week').add(6, 'd'),
                onSelectedDateChange: scope.handleSelectedDateChange
            });
        }) : _jsx(SelectorWeek, {
            selectedDate: scope.props.selectedDate,
            currentMonth: scope.state.currentMonth,
            startDate: this.props.selectedDate.clone().startOf('week'),
            endDate: this.props.selectedDate.clone().startOf('week').startOf('week').add(6, 'd'),
            onSelectedDateChange: this.handleSelectedDateChange
        })));
    }
}

var _ref3 = _jsx("h3", {
    className: "studio-info-name"
}, void 0, "All Studios");

var _ref4 = _jsx("p", {
    className: "more-about-text"
}, void 0, "More about the studio");

var _ref5 = _jsx("br", {});

class StudioInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfo: false
        };

        this.handleInfoDisplay = this.handleInfoDisplay.bind(this);
    }

    handleInfoDisplay(e) {
        let display = !this.state.displayInfo;

        this.setState({
            displayInfo: display
        });
    }

    render() {

        let infoStyle = {
            display: this.state.displayInfo ? "block" : "none"
        };

        let arrowStyle = {
            transform: this.state.displayInfo ? "rotate(180deg)" : "rotate(0deg)"
        };

        return _jsx("div", {}, void 0, _jsx("div", {
            className: "studio-name-box"
        }, void 0, this.props.viewAll ? _ref3 : _jsx("h3", {
            className: "studio-info-name"
        }, void 0, this.props.data[this.props.selected].facultyName)), !this.props.viewAll ? _jsx("button", {
            className: "show-info-control",
            onClick: this.handleInfoDisplay
        }, void 0, _jsx("i", {
            className: "material-icons icon-left-align",
            style: arrowStyle,
            "aria-hidden": "true"
        }, void 0, "arrow_drop_down"), " ", _ref4) : " ", _jsx("div", {
            style: infoStyle
        }, void 0, this.props.data[this.props.selected].facultyInfo.split('\n').map(function (text) {
            return _jsx("p", {}, void 0, text, _ref5);
        })));
    }
}

class StudioMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelectedStudioChange = this.handleSelectedStudioChange.bind(this);
    }

    handleSelectedStudioChange(studioNum) {
        this.props.onSelectedStudioChange(studioNum);
    }

    render() {
        let imageStyle = {
            backgroundImage: 'url(' + imgUrl + this.props.studioClass + '-small.svg' + ')'
        };

        return _jsx("div", {
            className: "studio-menu-item",
            onClick: () => this.handleSelectedStudioChange(this.props.studioNum)
        }, void 0, _jsx("div", {
            className: "studio-menu-item-img",
            style: imageStyle
        }, void 0), _jsx("h5", {
            className: "studio-menu-item-name"
        }, void 0, this.props.studioName), _jsx("p", {
            className: "studio-menu-item-times"
        }, void 0, `Open Until 9pm`));
    }
}

var _ref6 = _jsx("i", {
    className: "material-icons icon-left-align"
}, void 0, "arrow_back");

var _ref7 = _jsx("h6", {
    className: "back-button-text"
}, void 0, "back");

class BackToMenuButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleDisplayMenuChange = this.handleDisplayMenuChange.bind(this);
    }

    handleDisplayMenuChange(view) {
        this.props.onDisplayMenuChange(view);
    }

    render() {
        return _jsx("button", {
            className: "back-button",
            onClick: () => this.handleDisplayMenuChange(true)
        }, void 0, _ref6, " ", _ref7);
    }
}

var _ref8 = _jsx("div", {
    className: "studio-menu-welcome"
}, void 0, _jsx("h2", {
    className: "welcome-message"
}, void 0, "Good Afternoon"), _jsx("p", {
    className: "welcome-help"
}, void 0, "Select a studio to see it's availibility."));

var _ref9 = _jsx("div", {
    className: "studio-menu-item-img"
}, void 0);

var _ref10 = _jsx("h4", {
    className: "studio-menu-item-name"
}, void 0, "Compare All Studios");

class StudioMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: true
        };

        this.handleViewAllChange = this.handleViewAllChange.bind(this);
    }

    handleViewAllChange(view) {
        this.props.onViewAllChange(view);
    }

    render() {
        return _jsx("div", {
            className: "studio-menu-box",
            style: this.props.style
        }, void 0, _ref8, _jsx("div", {
            className: "studio-buttons-box"
        }, void 0, this.props.data.map((studio, i) => {
            return _jsx(StudioMenuItem, {
                studioName: studio.facultyName,
                studioClass: studio.facultyClass,
                studioTimes: studio.days[0],
                studioNum: i,
                onSelectedStudioChange: this.props.onSelectedStudioChange
            });
        }), _jsx("div", {
            className: "studio-menu-item compare-all",
            onClick: () => this.handleViewAllChange(true)
        }, void 0, _ref9, _ref10)));
    }
}

var _ref11 = _jsx(CalTimes, {});

class StudioCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: [],
            selectedDate: moment(),
            selectedStudio: 0,
            viewAll: false,
            displayMenu: true
        };

        this.handleSelectedStudio = this.handleSelectedStudio.bind(this);
        this.handleViewAll = this.handleViewAll.bind(this);
        this.handleDisplayMenu = this.handleDisplayMenu.bind(this);
        this.handleSelectedDate = this.handleSelectedDate.bind(this);
    }

    componentDidMount() {
        axios.get("../data/times.json").then(res => {
            const studios = res.data;
            console.log(studios);
            this.setState({
                studios: studios
            });
        });
    }

    handleSelectedStudio(studio) {
        this.setState({
            selectedStudio: studio,
            viewAll: false,
            displayMenu: false
        });
    }

    handleDisplayMenu(view) {
        this.setState({
            displayMenu: view
        });
    }

    handleViewAll(view) {
        this.setState({
            viewAll: view,
            displayMenu: false
        });
    }

    handleSelectedDate(newDate) {
        this.setState({
            currentMonth: newDate,
            selectedDate: newDate
        });
    }

    render() {
        let menuStyle = {
            //display: this.state.displayMenu ? "block" : "none"
            transform: this.state.displayMenu ? "translateX(0%)" : "translateX(-110%)",
            opacity: this.state.displayMenu ? "1" : "0"
        };

        return _jsx("div", {
            className: "app-inner"
        }, void 0, this.state.studios.length > 0 && _jsx(StudioMenu, {
            data: this.state.studios,
            selectedStudio: this.state.selectedStudio,
            onSelectedStudioChange: this.handleSelectedStudio,
            onViewAllChange: this.handleViewAll,
            style: menuStyle
        }), _jsx("div", {
            className: "top-area"
        }, void 0, _jsx(BackToMenuButton, {
            onDisplayMenuChange: this.handleDisplayMenu
        }), this.state.studios.length > 0 && _jsx(StudioInfo, {
            data: this.state.studios,
            isMenuOpen: this.state.displayMenu,
            selected: this.state.selectedStudio,
            viewAll: this.state.viewAll
        })), _jsx("div", {
            className: "schedule"
        }, void 0, this.state.studios.length > 0 && _jsx(DateSelector, {
            onSelectedDateChange: this.handleSelectedDate,
            onCurrentMonthChange: this.state.currentMonth,
            selectedDate: this.state.selectedDate
        }), _jsx("div", {
            className: "sched-body"
        }, void 0, _ref11, this.state.studios.length > 0 && _jsx(CalendarBody, {
            data: this.state.studios,
            selected: this.state.selectedStudio,
            viewAll: this.state.viewAll,
            selectedDate: this.state.selectedDate
        }))));
    }
}

ReactDOM.render(_jsx(StudioCalendar, {}), document.getElementById('root'));
