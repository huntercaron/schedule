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
        return (
            <div className="day">

            </div>
        )
    }
}

class SelectorWeek extends React.Component {
    render () {
        let startOfWeek = moment().startOf('week');
        let endOfWeek = moment().endOf('week');

        let days = [];
        let day = this.props.startDate;

        while (day <= endOfWeek) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
        }

        return (
            <div className="selector-week">
                {days.map(function(day){
                    return <p>{day}<br/></p>
                })}
            </div>
        )
    }
}

class DateSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewMonth: false
        };
    }

    render () {
        let month = moment();
        console.log(month.startOf("week").toDate())
        return (
            <div className="date-selector">
                <div className="selector-cal">
                    {this.state.viewMonth ? (
                            <Studio startDate={moment().startOf('month')} endDate={moment().startOf('month').add(6, 'd')}/>
                        ) : (
                            <Studio startDate={moment().startOf('month')} endDate={moment().startOf('month').add(6, 'd')}/>
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
