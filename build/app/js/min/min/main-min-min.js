var _jsx = function () {
    var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;return function createRawReactElement(type, props, key, children) {
        var defaultProps = type && type.defaultProps;var childrenLength = arguments.length - 3;if (!props && childrenLength !== 0) {
            props = {};
        }if (props && defaultProps) {
            for (var propName in defaultProps) {
                if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                }
            }
        } else if (!props) {
            props = defaultProps || {};
        }if (childrenLength === 1) {
            props.children = children;
        } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 3];
            }props.children = childArray;
        }return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null };
    };
}();

var times = [];
var eventHeight = 24;
let imgUrl = "./images/";
let membersInfo = "QEPCCC Guild members may purchase a monthly membership for $25 +HST. A non-resident fee of $10 +HST will be charged as applicable.\n Individual/Artist memberships are available for $35 +HST, for one month. A non-resident fee of $10 +HST will be charged as applicable. Please note there are no discounts available on this membership.\n All members must be over the age of 18.\n Please see the Front Desk for sign up options.\n \n Rules and Obligations\n Members are expected to exhibit a good understanding of the materials, tools and processes required to safely practice independently in our specialized studios.\n Members get access to the QEPCCC Wood Working Studio, Pottery Studio, Fine Arts Studio and Digital Arts Lab during studio drop-in times and can use the studios Monday-Thursday from 8 a.m.-10 p.m. on Fridays 8 a.m.-9 p.m. on weekends 8 a.m.-7 p.m. when there are no programmed classes or bookings. Some restrictions do apply. Studio schedules and facility availability can be checked online.\n Members must sign-in at customer service.\n Members must show demonstrated ability and complete prerequisite courses for access to specialized studio equipment (i.e. wood shop, pottery wheels). Details are provided in the studio descriptions below.\n Members are responsible for cleaning the studio space after use.\n Members receive half of a locker and an open storage shelf. Additional locker rental is available for members on a first-come, first-served basis. Full locker: $15 per month.\n Additional storage shelves (open) in the wood shop, ceramic studio and fine art studio can be purchased for $10 per month, per shelf.\n";

var _ref = _jsx("p", {
    className: "event-status"
}, void 0, "Members Only");

var _ref2 = _jsx("p", {
    className: "event-status"
}, void 0, "Drop-In Time");

var _ref3 = _jsx("i", {
    className: "material-icons"
}, void 0, "close");

class CalEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewEventInfo: false
        };
    }

    handleViewEventInfo(view) {
        this.setState({
            viewEventInfo: view
        });
    }

    render() {
        let eventInfo;

        switch (this.props.time.statusString.toLowerCase()) {
            case "available":
                eventInfo = _ref;
                break;

            case "booked":
                eventInfo = _ref2;
                break;

            case "event":
                eventInfo = _jsx("p", {
                    className: "event-status"
                }, void 0, this.props.time.eventInfo.eventName);
                break;

        }

        return _jsx("div", {
            className: "day-box"
        }, void 0, this.props.time.statusString == "Event" && this.state.viewEventInfo && _jsx("div", {
            className: "day-event-info-box"
        }, void 0, _jsx("div", {
            className: "day-event-info"
        }, void 0, _jsx("p", {
            onClick: () => this.handleViewEventInfo(false)
        }, void 0, _ref3), _jsx("p", {
            className: "day-event-info-name"
        }, void 0, this.props.time.eventInfo.eventName), _jsx("p", {
            className: "day-event-info-small"
        }, void 0, this.props.time.eventInfo.eventAges), _jsx("p", {
            className: "day-event-info-small"
        }, void 0, this.props.time.eventInfo.eventCost), _jsx("p", {
            className: "day-event-info-"
        }, void 0, this.props.time.eventInfo.eventDesc))), _jsx("div", {
            style: this.props.style,
            className: `sched-row cal-event-box`,
            onClick: () => this.handleViewEventInfo(true)
        }, void 0, _jsx("div", {
            className: `cal-event ${this.props.time.statusString}`
        }, void 0, eventInfo)));
    }
}

class Studio extends React.Component {
    render() {
        let scope = this;
        let count = 1;
        let selectedDate = parseInt(this.props.selectedDate.format("d"));

        return _jsx("div", {
            className: "studio-col"
        }, void 0, this.props.data.days[selectedDate].times.map(function (time, i) {
            if (i > 13) {
                if (i != scope.props.data.days[selectedDate].times.length - 1) {
                    if (scope.props.data.days[selectedDate].times[i + 1].statusString != time.statusString || time.statusString == "Closed") {

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
        let scope = this;

        return _jsx("div", {
            className: "sched-main sched-col"
        }, void 0, this.props.viewAll ? this.props.data.map(function (studio, i) {
            let imageStyle = {
                backgroundImage: 'url(' + imgUrl + studio.facultyClass + '-small.svg' + ')'
            };

            return _jsx("div", {
                className: "view-all-studio-box"
            }, void 0, _jsx("div", {
                className: "view-all-img",
                style: imageStyle
            }), _jsx(Studio, {
                className: "sched-row",
                data: studio,
                selectedDate: scope.props.selectedDate
            }));
        }) : _jsx(Studio, {
            className: "sched-row",
            data: this.props.data[this.props.selected],
            selectedDate: this.props.selectedDate
        }));
    }

}

class CalTimes extends React.Component {
    render() {
        let calTimeFormat = moment().hour(7).minute(0);
        let calTimeNum = 7;
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
        }, void 0, _jsx("h4", {
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

var _ref4 = _jsx("i", {
    className: "material-icons"
}, void 0, "navigate_before");

var _ref5 = _jsx("i", {
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
        }, void 0, _ref4), _jsx("h4", {
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
        }, void 0, _ref5));
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
        }, void 0, _jsx("div", {
            className: "day-of-week-box"
        }, void 0, _jsx("p", {
            className: "day-of-week day-info"
        }, void 0, moment().day(0).format("ddd")), _jsx("p", {
            className: "day-of-week day-info"
        }, void 0, moment().day(1).format("ddd")), _jsx("p", {
            className: "day-of-week day-info"
        }, void 0, moment().day(2).format("ddd")), _jsx("p", {
            className: "day-of-week day-info wed"
        }, void 0, moment().day(3).format("ddd")), _jsx("p", {
            className: "day-of-week day-info"
        }, void 0, moment().day(4).format("ddd")), _jsx("p", {
            className: "day-of-week day-info"
        }, void 0, moment().day(5).format("ddd")), _jsx("p", {
            className: "day-of-week day-info"
        }, void 0, moment().day(6).format("ddd"))), this.state.viewMonth ? weekdays.map(function (weekday) {
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

var _ref6 = _jsx("h3", {
    className: "studio-info-name"
}, void 0, "All Studios");

var _ref7 = _jsx("p", {
    className: "more-about-text"
}, void 0, "More about the studio");

var _ref8 = _jsx("br", {});

class StudioInfo extends React.Component {
    constructor(props) {
        super(props);

        let displayInfo = window.innerWidth > 750;

        this.state = {
            displayInfo: displayInfo
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

        let imageStyle = {
            backgroundImage: 'url(' + imgUrl + this.props.data[this.props.selected].facultyClass + '-small.svg' + ')'
        };

        let infoStyle = {
            display: this.state.displayInfo ? "block" : "none"
        };

        let arrowStyle = {
            transform: this.state.displayInfo ? "rotate(180deg)" : "rotate(0deg)"
        };

        return _jsx("div", {}, void 0, !this.props.viewAll ? _jsx("div", {
            className: "studio-info-img",
            style: imageStyle
        }) : " ", _jsx("div", {
            className: "studio-name-box"
        }, void 0, this.props.viewAll ? _ref6 : _jsx("h3", {
            className: "studio-info-name"
        }, void 0, this.props.data[this.props.selected].facultyName)), !this.props.viewAll ? _jsx("button", {
            className: "show-info-control",
            onClick: this.handleInfoDisplay
        }, void 0, _jsx("i", {
            className: "material-icons icon-left-align",
            style: arrowStyle,
            "aria-hidden": "true"
        }, void 0, "arrow_drop_down"), " ", _ref7) : " ", _jsx("div", {
            style: infoStyle
        }, void 0, !this.props.viewAll ? this.props.data[this.props.selected].facultyInfo.split('\n').map(function (text) {
            return _jsx("p", {}, void 0, text, _ref8);
        }) : " "));
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

var _ref9 = _jsx("i", {
    className: "material-icons icon-left-align"
}, void 0, "arrow_back");

var _ref10 = _jsx("h6", {
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
        }, void 0, _ref9, " ", _ref10);
    }
}

var _ref11 = _jsx("div", {
    className: "studio-menu-welcome"
}, void 0, _jsx("h2", {
    className: "welcome-message"
}, void 0, "Good Afternoon"), _jsx("p", {
    className: "welcome-help"
}, void 0, "Select a studio to see it's availibility."));

var _ref12 = _jsx("div", {
    className: "studio-menu-item-img"
}, void 0);

var _ref13 = _jsx("h4", {
    className: "studio-menu-item-name"
}, void 0, "Compare All Studios");

var _ref14 = _jsx("h4", {
    className: "studio-menu-item-name"
}, void 0, "Become a member ", _jsx("i", {
    className: "material-icons"
}, void 0, "info_outline"));

class StudioMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: true
        };

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
        return _jsx("div", {
            className: "studio-menu-box",
            style: this.props.style
        }, void 0, _ref11, _jsx("div", {
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
        }, void 0, _ref12, _ref13), _jsx("div", {
            className: "become-member",
            onClick: () => this.handleDisplayMemberInfoChange(true)
        }, void 0, _ref14)));
    }
}

var _ref15 = _jsx("h3", {
    className: "studio-info-name"
}, void 0, "Member Info");

var _ref16 = _jsx("br", {});

var _ref17 = _jsx(CalTimes, {});

class StudioCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: [],
            selectedDate: moment(),
            selectedStudio: 0,
            viewAll: false,
            displayMenu: true,
            displayMemberInfo: false
        };

        this.handleSelectedStudio = this.handleSelectedStudio.bind(this);
        this.handleViewAll = this.handleViewAll.bind(this);
        this.handleDisplayMenu = this.handleDisplayMenu.bind(this);
        this.handleSelectedDate = this.handleSelectedDate.bind(this);
        this.handleDisplayMemberInfo = this.handleDisplayMemberInfo.bind(this);
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
            displayMenu: false,
            displayMemberInfo: false
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
            displayMenu: false,
            displayMemberInfo: false
        });
    }

    handleSelectedDate(newDate) {
        this.setState({
            currentMonth: newDate,
            selectedDate: newDate
        });
    }

    handleDisplayMemberInfo(view) {
        this.setState({
            displayMemberInfo: view,
            displayMenu: false
        });
    }

    render() {
        let menuStyle = {
            //display: this.state.displayMenu ? "block" : "none"
            transform: this.state.displayMenu ? "translateX(0%)" : "translateX(-110%)",
            opacity: this.state.displayMenu ? "1" : "0"
        };

        let schedClass = this.state.viewAll ? "view-all" : " ";

        return _jsx("div", {
            className: "app-inner"
        }, void 0, this.state.studios.length > 0 && _jsx(StudioMenu, {
            data: this.state.studios,
            selectedStudio: this.state.selectedStudio,
            onSelectedStudioChange: this.handleSelectedStudio,
            onViewAllChange: this.handleViewAll,
            onDisplayMemberInfoChange: this.handleDisplayMemberInfo,
            style: menuStyle
        }), this.state.displayMemberInfo && _jsx("div", {
            className: "member-info-box"
        }, void 0, _jsx("div", {
            className: "top-area"
        }, void 0, _jsx(BackToMenuButton, {
            onDisplayMenuChange: this.handleDisplayMenu
        }), _ref15), _jsx("div", {
            className: "member-info"
        }, void 0, membersInfo.split('\n').map(function (text) {
            return _jsx("p", {}, void 0, text, _ref16);
        }))), this.state.studios.length > 0 && !this.state.displayMemberInfo && _jsx("div", {
            className: "studio-sched-box"
        }, void 0, _jsx("div", {
            className: "top-area"
        }, void 0, _jsx(BackToMenuButton, {
            onDisplayMenuChange: this.handleDisplayMenu
        }), _jsx(StudioInfo, {
            data: this.state.studios,
            isMenuOpen: this.state.displayMenu,
            selected: this.state.selectedStudio,
            viewAll: this.state.viewAll
        })), _jsx("div", {
            className: `schedule ${schedClass}`
        }, void 0, _jsx(DateSelector, {
            onSelectedDateChange: this.handleSelectedDate,
            onCurrentMonthChange: this.state.currentMonth,
            selectedDate: this.state.selectedDate
        }), _jsx("div", {
            className: "sched-body"
        }, void 0, _ref17, _jsx(CalendarBody, {
            data: this.state.studios,
            selected: this.state.selectedStudio,
            selectedDate: this.state.selectedDate,
            viewAll: this.state.viewAll,
            selectedDate: this.state.selectedDate
        })))));
    }
}

ReactDOM.render(_jsx(StudioCalendar, {}), document.getElementById('root'));
