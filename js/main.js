var times = [];
var eventHeight = 24;
let imgUrl = "./images/";

class CalEvent extends React.Component {
    render () {
        let eventInfo;
        if (this.props.time.status) {
            eventInfo = <p>{this.props.time.statusString}</p>;
        } else {
            eventInfo = <p>{this.props.time.statusString}</p>;
        }
        return (
            <div style={this.props.style} className={`sched-row cal-event-box`}>
                <div className={`cal-event ${this.props.time.statusString}`}>
                    {eventInfo}
                </div>
            </div>
        );
    }
}

class Studio extends React.Component {
    render() {
        let scope = this;
        let count = 1;

        return (
          <div className="studio-col">
              {

                this.props.data.days[0].times.map(function(time, i){
                    if (i > 11) {
                        if (i != scope.props.data.days[0].times.length-1) {
                            if (scope.props.data.days[0].times[i+1].statusString != time.statusString || time.statusString == "Closed") {

                                let eventStyle = {
                                    height: (count*eventHeight + "px")
                                };
                                count = 1;

                                return <CalEvent time={time} className={`sched-row ${time.status}`} status={time.status} style={eventStyle}/>
                            }
                            else {
                                count++;
                            }
                        }
                    }

              })}
          </div>
      );
    }
}

class CalendarBody extends React.Component {
    render() {
        return (
          <div className="sched-main sched-col">
            {this.props.viewAll ? (
                this.props.data.map(function(studio, i){
                    return <Studio className="sched-row" data={studio}/>
                })
            ) : (
                <Studio className="sched-row" data={this.props.data[this.props.selected]}/>
            )}

          </div>
        );
    }

}

class CalTimes extends React.Component {
    render () {
        let calTimeFormat = moment().hour(6).minute(0);
        let calTimeNum = 6;
        let calTimes = [];

        while (calTimeNum <= 24) {
            calTimes.push({ "formatted": calTimeFormat.format("h:mma"), "number": calTimeNum})
            calTimeNum = calTimeNum+0.5;
            calTimeFormat.add(30, 'm');
        }

        return (
            <div className="sched-col">
                {calTimes.map(function(time, i){
                    let hourType = !Number.isInteger(time.number) ? "half-hour" : "full-hour";
                    return <div className={`time sched-row ${hourType}`} id={`${time.number}-time`}>{time.formatted}</div>
                })}
            </div>
        )
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

    render () {
        let selectedDay = (this.props.selectedDate.format("D") === this.props.day.format("D") && (this.props.selectedDate.format("M") === this.props.day.format("M"))) ? "selected-day" : "";
        let notThisMonth = (this.props.currentMonth.month() !== this.props.day.month()) ? "not-current-month" : "";
        let today = (moment().format("D") === this.props.day.format("D") && (moment().format("M") === this.props.day.format("M"))) ? "selector-day-today" : "";

        return (
            <div id={this.props.day.format("ddd")}
            data-day={this.props.day.format()}
            onClick={this.handleSelectedDateChange}
            className={`selector-day ${selectedDay} ${notThisMonth} ${today}`}>
                <div className="selector-day-inner">
                    <p className="day-of-week day-info">{this.props.day.format("ddd")}</p>
                    <h4 className="day-num day-info">{this.props.day.format("D")}</h4>
                </div>
            </div>
        )
    }
}

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
            <div className={`selector-week ${selectedWeek}`}>
                {days.map(function(day){
                    return <SelectorDay
                            selectedDate={scope.props.selectedDate}
                            currentMonth={scope.props.currentMonth}
                            day={day}
                            onSelectedDateChange={scope.props.onSelectedDateChange}
                            />
                })}
            </div>
        )
    }
}

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
        let scope = this;

        let monthNavStyle = {
            display: this.props.viewMonth ? "block" : "none"
        };

        let openMonthArrowStyle = {
            transform: this.props.viewMonth ? "rotate(180deg)" : "rotate(0deg)"
        };

        return (
            <div className="month-controls-box">
                <button className="month-controls" style={monthNavStyle} onClick={() => this.handleCurrentMonthChange(this.props.currentMonth.clone().subtract(1, "months"))} >
                    <i className="material-icons">navigate_before</i>
                </button>
                <h4 className="current-month" onClick={this.handleViewMonthChange}>{this.props.currentMonth.format("MMMM Y")} <i className="material-icons" style={openMonthArrowStyle} aria-hidden="true">arrow_drop_down</i> </h4>
                <button className="month-controls" style={monthNavStyle} onClick={() => this.handleCurrentMonthChange(this.props.currentMonth.clone().add(1, "months"))}>
                    <i className="material-icons">navigate_next</i>
                </button>
            </div>
        );
    }
}

class DateSelector extends React.Component {
    constructor(props) {
        super(props);
        let currentMonth = moment();
        this.state = {
            viewMonth: false,
            currentMonth: currentMonth,
            selectedDate: moment().month(parseInt(currentMonth.format("M")-1))
        };

        this.handleSelectedDate = this.handleSelectedDate.bind(this);
        this.handleCurrentMonth = this.handleCurrentMonth.bind(this);
        this.handleViewMonth = this.handleViewMonth.bind(this);
    }

    handleSelectedDate(newDate) {
        console.log(`selected ${newDate.toDate()}`)
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

    handleViewMonth(view) {
        view = !this.state.viewMonth;
        if (view == false) {
            this.setState({
                 currentMonth: this.state.selectedDate
            });
        }

        this.setState({
             viewMonth: view
        });
    }

    render () {
        //UR DOING STUFF HERE TRYING TO FIGURE OUT HOW TO CACULATE THE WEEKS IN THE MONTH
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

        return (
            <div className="date-selector">

                <MonthControls
                currentMonth={this.state.currentMonth}
                onCurrentMonthChange={this.handleCurrentMonth}
                viewMonth={this.state.viewMonth}
                onViewMonthChange={this.handleViewMonth}/>

                <div className="selector-cal">
                    {this.state.viewMonth ? (
                        weekdays.map(function(weekday){
                            return <SelectorWeek
                                    selectedDate={scope.state.selectedDate}
                                    currentMonth={scope.state.currentMonth}
                                    startDate={weekday.startOf('week')}
                                    endDate={weekday.clone().startOf('week').add(6, 'd')}
                                    onSelectedDateChange={scope.handleSelectedDate}
                                    />
                        })
                        ) : (
                             <SelectorWeek
                             selectedDate={scope.state.selectedDate}
                             currentMonth={scope.state.currentMonth}
                             startDate={this.state.selectedDate.clone().startOf('week')}
                             endDate={this.state.selectedDate.clone().startOf('week').startOf('week').add(6, 'd')}
                             onSelectedDateChange={this.handleSelectedDate}
                             />
                        )}
                </div>
            </div>
        )
    }
}

class StudioInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfo: false
        }

        this.handleInfoDisplay = this.handleInfoDisplay.bind(this);
    }

    handleInfoDisplay(e) {
        let display = !this.state.displayInfo;

        this.setState({
            displayInfo: display
        });
    }

    render () {

        let infoStyle = {
            display: (this.state.displayInfo) ? "block" : "none"
        };

        let arrowStyle = {
            transform: this.state.displayInfo ? "rotate(180deg)" : "rotate(0deg)"
        };

        return (
            <div>
                <div className="studio-name-box">
                    {this.props.viewAll ? (
                        <h3 className="studio-info-name">All Studios</h3>
                    ) : (
                        <h3 className="studio-info-name">{this.props.data[this.props.selected].facultyName}</h3>
                    )}
                </div>
                { (!(this.props.viewAll)) ? (
                    <button className="show-info-control" onClick={this.handleInfoDisplay} >
                        <i className="material-icons icon-left-align" style={arrowStyle} aria-hidden="true">arrow_drop_down</i> <p className="more-about-text">More about the studio</p>
                    </button>
                ) : (" ")}
                <div style={infoStyle}>
                    {this.props.data[this.props.selected].facultyInfo.split('\n').map(function(text){
                        return <p>{text}<br/></p>
                    })}
                </div>
            </div>
        );
    }
}

class StudioMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelectedStudioChange = this.handleSelectedStudioChange.bind(this);
    }

    handleSelectedStudioChange(studioNum) {
        this.props.onSelectedStudioChange(studioNum)
    }

    render() {
        let imageStyle = {
            backgroundImage: 'url(' + imgUrl + this.props.studioClass + '-small.svg' + ')',
        }

        return(
            <div className="studio-menu-item" onClick={() => this.handleSelectedStudioChange(this.props.studioNum)}>
                <div className="studio-menu-item-img" style={imageStyle}>
                </div>
                <h5 className="studio-menu-item-name" >{this.props.studioName}</h5>
                <p className="studio-menu-item-times">{`Open Until 9pm`}</p>
            </div>
        );
    }
}

class BackToMenuButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleDisplayMenuChange = this.handleDisplayMenuChange.bind(this);
    }

    handleDisplayMenuChange(view) {
        this.props.onDisplayMenuChange(view);
    }

    render() {
        return (
            <button className="back-button" onClick={() => this.handleDisplayMenuChange(true)} >
                <i className="material-icons icon-left-align">arrow_back</i> <h6 className="back-button-text">back</h6>
            </button>
        )
    }
}

class StudioMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: true
        }

        this.handleViewAllChange = this.handleViewAllChange.bind(this);
    }

    handleViewAllChange(view) {
        this.props.onViewAllChange(view);
    }

    render() {
        return(
            <div className="studio-menu-box" style={this.props.style}>
                <div className="studio-menu-welcome">
                    <h2 className="welcome-message">Good Afternoon</h2>
                    <p className="welcome-help">Select a studio to see it&apos;s availibility.</p>
                </div>
                <div className="studio-buttons-box">
                    {this.props.data.map((studio, i) => {
                        return <StudioMenuItem
                                studioName={studio.facultyName}
                                studioClass={studio.facultyClass}
                                studioTimes={studio.days[0]}
                                studioNum={i}
                                onSelectedStudioChange={this.props.onSelectedStudioChange}/>
                    })}

                    <div className="studio-menu-item compare-all" onClick={() => this.handleViewAllChange(true)}>
                        <div className="studio-menu-item-img">
                        </div>
                        <h4 className="studio-menu-item-name" >Compare All Studios</h4>
                    </div>
                </div>
            </div>
        );
    }
}

class StudioCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: [],
            selectedDay: 0,
            selectedStudio: 0,
            viewAll: false,
            displayMenu: true
        };

        this.handleSelectedStudio = this.handleSelectedStudio.bind(this);
        this.handleViewAll = this.handleViewAll.bind(this);
        this.handleDisplayMenu = this.handleDisplayMenu.bind(this);
    }

    componentDidMount() {
      axios.get("../data/times.json")
        .then(res => {
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
        })
    }

    handleDisplayMenu(view) {
        this.setState({
            displayMenu: view
        })
    }

    handleViewAll(view) {
        this.setState({
            viewAll: view,
            displayMenu: false
        })
    }

    render() {
        let menuStyle = {
            //display: this.state.displayMenu ? "block" : "none"
            transform: this.state.displayMenu ? "translateX(0%)" : "translateX(-110%)",
            opacity: this.state.displayMenu ? "1" : "0"
        };

        return (
            <div className="app-inner">
                {this.state.studios.length > 0 &&
                    <StudioMenu
                    data={this.state.studios}
                    selectedStudio={this.state.selectedStudio}
                    onSelectedStudioChange={this.handleSelectedStudio}
                    onViewAllChange={this.handleViewAll}
                    style={menuStyle}/>
                }

                <div className="top-area">
                    <BackToMenuButton
                    onDisplayMenuChange={this.handleDisplayMenu}/>

                    {this.state.studios.length > 0 &&
                        <StudioInfo
                        data={this.state.studios}
                        isMenuOpen={this.state.displayMenu}
                        selected={this.state.selectedStudio}
                        viewAll={this.state.viewAll}/>
                    }
                </div>

                <div className="schedule">
                    <DateSelector />
                    <div className="sched-body">
                        <CalTimes />
                        {this.state.studios.length > 0 &&
                            <CalendarBody data={this.state.studios}
                            selected={this.state.selectedStudio}
                            viewAll={this.state.viewAll}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
  <StudioCalendar />,
  document.getElementById('root')
);
