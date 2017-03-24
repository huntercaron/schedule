import React               from 'react'
import Wrapper             from './Wrapper'
import StudioIcon                               from '../StudioIcon'
import Studio                              from '../Studio'

const CalendarBody = (props) => {
    return (

      <div className="sched-main sched-col">
        {props.viewAll ? (
            props.studio.map(function(studio, i){
                return (
                    <div className="view-all-studio-box" key={i}>
                        <StudioIcon name={studio.studioClass} size="small"/>
                        <Studio className="sched-row" data={studio} selectedDate={props.selectedDate}/>
                    </div>
                );
            })
        ) : (
            <Studio className="sched-row" data={props.studio} selectedDate={props.selectedDate}/>
        )}

      </div>
    );
}

export default CalendarBody;
