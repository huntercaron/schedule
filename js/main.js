var times = [];
var eventHeight = 24;
let imgUrl = "./images/";
let membersInfo = "QEPCCC Guild members may purchase a monthly membership for $25 +HST. A non-resident fee of $10 +HST will be charged as applicable.\n Individual/Artist memberships are available for $35 +HST, for one month. A non-resident fee of $10 +HST will be charged as applicable. Please note there are no discounts available on this membership.\n All members must be over the age of 18.\n Please see the Front Desk for sign up options.\n \n Rules and Obligations\n Members are expected to exhibit a good understanding of the materials, tools and processes required to safely practice independently in our specialized studios.\n Members get access to the QEPCCC Wood Working Studio, Pottery Studio, Fine Arts Studio and Digital Arts Lab during studio drop-in times and can use the studios Monday-Thursday from 8 a.m.-10 p.m. on Fridays 8 a.m.-9 p.m. on weekends 8 a.m.-7 p.m. when there are no programmed classes or bookings. Some restrictions do apply. Studio schedules and facility availability can be checked online.\n Members must sign-in at customer service.\n Members must show demonstrated ability and complete prerequisite courses for access to specialized studio equipment (i.e. wood shop, pottery wheels). Details are provided in the studio descriptions below.\n Members are responsible for cleaning the studio space after use.\n Members receive half of a locker and an open storage shelf. Additional locker rental is available for members on a first-come, first-served basis. Full locker: $15 per month.\n Additional storage shelves (open) in the wood shop, ceramic studio and fine art studio can be purchased for $10 per month, per shelf.\n";

class CalEvent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            viewEventInfo: false
        }
    }

    handleViewEventInfo(view) {
        this.setState({
            viewEventInfo: view
        })
    }

    render () {
        let eventInfo;

        switch(this.props.time.statusString.toLowerCase()) {
            case "available":
                eventInfo = <p className="event-status">Members Only</p>;
                break;

            case "booked":
                eventInfo = <p className="event-status">Drop-In Time</p>;
                break;

            case "event":
                eventInfo = <p className="event-status">{this.props.time.eventInfo.eventName}</p>;
                break;

        }

        return (
            <div className="day-box">
                {this.props.time.statusString == "Event" && this.state.viewEventInfo &&
                    <div className="day-event-info-box">
                        <div className="day-event-info">
                            <p onClick={() => this.handleViewEventInfo(false)}><i className="material-icons">close</i></p>
                            <p>{this.props.time.eventInfo.eventName}</p>
                            <p>{this.props.time.eventInfo.eventAge}</p>
                            <p>{this.props.time.eventInfo.eventCost}</p>
                            <p>{this.props.time.eventInfo.eventDesc}</p>
                        </div>
                    </div>
                }

                <div style={this.props.style} className={`sched-row cal-event-box`} onClick={() => this.handleViewEventInfo(true)}>
                    <div className={`cal-event ${this.props.time.statusString}`}>
                        {eventInfo}
                    </div>
                </div>
            </div>
        );
    }
}

class Studio extends React.Component {
    render() {
        let scope = this;
        let count = 1;
        let selectedDate = parseInt(this.props.selectedDate.format("d"));

        return (
          <div className="studio-col">
              {

                this.props.data.days[selectedDate].times.map(function(time, i){
                    if (i > 13) {
                        if (i != scope.props.data.days[selectedDate].times.length-1) {
                            if (scope.props.data.days[selectedDate].times[i+1].statusString != time.statusString || time.statusString == "Closed") {

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
        let scope = this;

        return (
          <div className="sched-main sched-col">
            {this.props.viewAll ? (
                this.props.data.map(function(studio, i){
                    let imageStyle = {
                        backgroundImage: 'url(' + imgUrl + studio.facultyClass + '-small.svg' + ')',
                    };

                    return (
                        <div className="view-all-studio-box">
                            <div className="view-all-img" style={imageStyle}></div>
                            <Studio className="sched-row" data={studio} selectedDate={scope.props.selectedDate}/>
                        </div>
                    );
                })
            ) : (
                <Studio className="sched-row" data={this.props.data[this.props.selected]} selectedDate={this.props.selectedDate}/>
            )}

          </div>
        );
    }

}

class CalTimes extends React.Component {
    render () {
        let calTimeFormat = moment().hour(7).minute(0);
        let calTimeNum = 7;
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
                    {/*<p className="day-of-week day-info">{this.props.day.format("ddd")}</p>*/}
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
            currentMonth: moment()
        };

        this.handleSelectedDateChange = this.handleSelectedDateChange.bind(this);
        this.handleCurrentMonth = this.handleCurrentMonth.bind(this);
        this.handleViewMonth = this.handleViewMonth.bind(this);
    }

    handleSelectedDateChange(newDate) {
        console.log(`selected ${newDate.toDate()}`)
        this.setState({
            currentMonth: newDate
        })
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
                        weekdays.map(function(weekday){
                            return <SelectorWeek
                                    selectedDate={scope.props.selectedDate}
                                    currentMonth={scope.state.currentMonth}
                                    startDate={weekday.startOf('week')}
                                    endDate={weekday.clone().startOf('week').add(6, 'd')}
                                    onSelectedDateChange={scope.handleSelectedDateChange}
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
            </div>
        )
    }
}

class StudioInfo extends React.Component {
    constructor(props) {
        super(props);

        let displayInfo = window.innerWidth > 750;

        this.state = {
            displayInfo: displayInfo
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

        let imageStyle = {
            backgroundImage: 'url(' + imgUrl + this.props.data[this.props.selected].facultyClass + '-small.svg' + ')',
        }

        let infoStyle = {
            display: (this.state.displayInfo) ? "block" : "none"
        };

        let arrowStyle = {
            transform: this.state.displayInfo ? "rotate(180deg)" : "rotate(0deg)"
        };

        return (
            <div>

                {!this.props.viewAll ? (
                    <div className="studio-info-img" style={imageStyle}></div>
                ) : (" ")}

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
                    { (!(this.props.viewAll)) ? (
                        this.props.data[this.props.selected].facultyInfo.split('\n').map(function(text){
                            return <p>{text}<br/></p>
                        })
                    ) : (" ")}
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
        this.handleDisplayMemberInfoChange = this.handleDisplayMemberInfoChange.bind(this);
    }

    handleViewAllChange(view) {
        this.props.onViewAllChange(view);
    }

    handleDisplayMemberInfoChange(view) {
        this.props.onDisplayMemberInfoChange(view);
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

                    <div className="become-member" onClick={() => this.handleDisplayMemberInfoChange(true)}>
                        <h4 className="studio-menu-item-name" >Become a member <i className="material-icons">info_outline</i></h4>
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
            displayMenu: false,
            displayMemberInfo: false
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
            displayMenu: false,
            displayMemberInfo: false
        })
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

        return (
            <div className="app-inner">

                {this.state.studios.length > 0 &&
                    <StudioMenu
                    data={this.state.studios}
                    selectedStudio={this.state.selectedStudio}
                    onSelectedStudioChange={this.handleSelectedStudio}
                    onViewAllChange={this.handleViewAll}
                    onDisplayMemberInfoChange={this.handleDisplayMemberInfo}
                    style={menuStyle}/>
                }

                {this.state.displayMemberInfo &&
                    <div className="member-info-box">
                        <div className="top-area">
                            <BackToMenuButton
                            onDisplayMenuChange={this.handleDisplayMenu}/>
                            <h3 className="studio-info-name">Member Info</h3>
                        </div>

                        <div className="member-info">
                            {membersInfo.split('\n').map(function(text){
                                return <p>{text}<br/></p>
                            })}
                        </div>
                    </div>
                }

                {this.state.studios.length > 0 && !this.state.displayMemberInfo &&
                    <div className="studio-sched-box">
                        <div className="top-area">
                            <BackToMenuButton
                            onDisplayMenuChange={this.handleDisplayMenu}/>

                                <StudioInfo
                                data={this.state.studios}
                                isMenuOpen={this.state.displayMenu}
                                selected={this.state.selectedStudio}
                                viewAll={this.state.viewAll}/>
                        </div>

                        <div className={`schedule ${schedClass}`}>
                                <DateSelector
                                onSelectedDateChange={this.handleSelectedDate}
                                onCurrentMonthChange={this.state.currentMonth}
                                selectedDate={this.state.selectedDate}/>

                            <div className="sched-body">
                                <CalTimes />

                                    <CalendarBody data={this.state.studios}
                                    selected={this.state.selectedStudio}
                                    selectedDate={this.state.selectedDate}
                                    viewAll={this.state.viewAll}
                                    selectedDate={this.state.selectedDate}/>

                            </div>
                        </div>
                    </div>
                }

            </div>
        );
    }
}


ReactDOM.render(
  <StudioCalendar />,
  document.getElementById('root')
);
