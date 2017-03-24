import React               from 'react'
import moment               from 'moment'
import Wrapper             from './Wrapper'
import CalEvent             from '../CalEvent'

const Studio = (props) => {
    const eventHeight = 25;
    let count = 1;
    let selectedDate = parseInt(props.selectedDate.format("d"));

    return (
      <div className="studio-col">
          {

            props.data.days[selectedDate].times.map(function(time, i){
                if (i > 13) {
                    if (i != props.data.days[selectedDate].times.length-1) {
                        if (props.data.days[selectedDate].times[i+1].statusString != time.statusString || time.statusString == "Closed") {

                            let eventStyle = {
                                height: (count*eventHeight + "px")
                            };
                            count = 1;

                            return <CalEvent time={time} key={i} className={`sched-row ${time.status}`} status={time.status} style={eventStyle}/>
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

export default Studio;
