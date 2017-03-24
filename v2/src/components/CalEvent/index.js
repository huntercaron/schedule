import React               from 'react'
import Wrapper             from './Wrapper'

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
                            <p className="day-event-info-name">{this.props.time.eventInfo.eventName}</p>
                            <p className="day-event-info-small">{this.props.time.eventInfo.eventAges}</p>
                            <p className="day-event-info-small">{this.props.time.eventInfo.eventCost}</p>
                            <p className="day-event-info-">{this.props.time.eventInfo.eventDesc}</p>
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

export default CalEvent;
