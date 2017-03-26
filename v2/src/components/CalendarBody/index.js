import React               from 'react'
import Wrapper             from './Wrapper'
import StudioIcon                               from '../StudioIcon'
import Studio                              from '../Studio'

const CalendarBody = (props) => {
    return (

      <div className="sched-main sched-col">
        {props.viewAll ? (
            props.studios.map(function(studio, i){
                return (
                    <Wrapper key={i}>
                        <StudioIcon name={studio.facultyClass} size="small"/>
                        <Studio className="sched-row" data={studio} selectedDate={props.selectedDate}/>
                    </Wrapper>
                );
            })
        ) : (
            <Studio className="sched-row" data={props.studio} selectedDate={props.selectedDate}/>
        )}

      </div>
    );
}

export default CalendarBody;
