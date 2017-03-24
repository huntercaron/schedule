import React               from 'react'
import moment               from 'moment'
import Wrapper             from './Wrapper'

const CalTimes = (props) => {
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
                return <div className={`time sched-row ${hourType}`} id={`${time.number}-time`} key={i}>{time.formatted}</div>
            })}
        </div>
    )

}

export default CalTimes;
