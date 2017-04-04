import React               from 'react'
import Wrapper             from './Wrapper'
import EventBox            from './EventBox'
import EventStatus            from './EventStatus'

import Event    from './Event'

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
        let eventStatus;

        switch(this.props.time.statusString.toLowerCase()) {
            case "available":
                eventStatus = <EventStatus>Members Only</EventStatus>;
                break;

            case "booked":
                eventStatus = <EventStatus>Drop-In Time</EventStatus>;
                break;

            case "event":
                eventStatus = <EventStatus>{this.props.time.eventInfo.eventName}</EventStatus>;
                break;

            default:
                eventStatus = <EventStatus></EventStatus>;

        }
        /*<Wrapper style={this.props.style} onClick={() => this.handleViewEventInfo(true)}>*/

        return (
            <Wrapper style={this.props.style}>
                {this.props.time.statusString === "Event" && this.state.viewEventInfo &&
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

                <Event className={this.props.time.statusString.toLowerCase()}>
                    {eventStatus}
                </Event>
            </Wrapper>
        );
    }
}

export default CalEvent;
