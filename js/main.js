var times = [];
var eventHeight = 24;

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
        console.log(scope.props.data);
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
    render () {
        let selectedDay = (this.props.selectedDate.format("D") === this.props.day.format("D")) ? "selected-day" : "";
        let notThisMonth = (this.props.selectedDate.format("M") !== this.props.day.format("M")) ? "not-current-month" : "";
        let today = (moment().format("D") === this.props.day.format("D")) ? "selector-day-today" : "";

        return (
            <div id={this.props.day.format("ddd")} className={`selector-day ${selectedDay} ${notThisMonth} ${today}`}>
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
                    return <SelectorDay selectedDate={scope.props.selectedDate} day={day}/>
                })}
            </div>
        )
    }
}

class MonthControls extends React.Component {
    render() {
        return (
            <div className="month-controls-box">
                <button className="month-controls">
                    <i className="fa fa-angle-left fa-2x" aria-hidden="true"> </i>
                </button>
                <h3 className="current-month">{moment().month(this.props.currentMonth).format("MMMM")}</h3>
                <button className="month-controls">
                    <i className="fa fa-angle-right fa-2x" aria-hidden="true"> </i>
                </button>
            </div>
        );
    }
}

class DateSelector extends React.Component {
    constructor(props) {
        super(props);

        let currentMonth = parseInt(moment().format("M")-1);
        console.log(currentMonth)

        this.state = {
            viewMonth: true,
            currentMonth: currentMonth,
            selectedDate: moment().month(currentMonth)
        };
    }

    render () {
        //UR DOING STUFF HERE TRYING TO FIGURE OUT HOW TO CACULATE THE WEEKS IN THE MONTH
        let weekCount = 0;
        let day = moment().month(this.state.currentMonth).date(0).startOf("week");
        let weekdays = [];
        let scope = this;

        while (day.month() <= this.state.selectedDate.month()) {
            weekdays.push(day);
            day = day.clone().add(1, 'w');
        }

        return (
            <div className="date-selector">
                <MonthControls currentMonth={this.state.currentMonth}/>
                <div className="selector-cal">
                    {this.state.viewMonth ? (
                        weekdays.map(function(weekday){
                            return <SelectorWeek selectedDate={scope.state.selectedDate} startDate={weekday.startOf('week')} endDate={weekday.clone().startOf('week').add(6, 'd')}/>
                        })
                        ) : (
                             <SelectorWeek selectedDate={scope.state.selectedDate} startDate={this.state.selectedDate.startOf('week')} endDate={this.state.selectedDate.startOf('week').clone().startOf('week').add(6, 'd')}/>
                        )}
                </div>
            </div>
        )
    }
}

class StudioInfo extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.data[this.props.selected].facultyName}</h1>
                <div>
                    {this.props.data[this.props.selected].facultyInfo.split('\n').map(function(text){
                        return <p>{text}<br/></p>
                    })}
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
            selected: 0,
            viewAll: false
        };
    }

    componentDidMount() {
      axios.get("../data/times.json")
        .then(res => {
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
        return (
            <div className="app-inner">
                <div className="top-area">
                    {this.state.studios.length > 0 &&
                        <StudioInfo data={this.state.studios} selected={this.state.selected} viewAll={this.state.viewAll}/>
                    }
                    <DateSelector />
                </div>
                <div className="schedule">
                    <div className="sched-body">
                        <CalTimes />
                        {this.state.studios.length > 0 &&
                            <CalendarBody data={this.state.studios} selected={this.state.selected} viewAll={this.state.viewAll}/>
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
