import React                                    from 'react'
import moment                                   from 'moment'
import StudioIcon                               from '../StudioIcon'
import Studio                                   from '../Studio'
import Wrapper                                  from './Wrapper'
import StudioWrapper                            from './StudioWrapper'
import IconBox                                  from './IconBox'

const CalendarBody = (props) => {
    return (

      <Wrapper>
        {props.viewAll ? (
            props.studios.map(function(studio, i){
                return (
                    <StudioWrapper key={i}>
                        <IconBox to={`/app/studio/${studio.facultyClass}/date/${moment().format('YYYY[-]MM[-]DD')}`}>
                            <StudioIcon name={studio.facultyClass} size="small"/>
                        </IconBox>

                        <Studio data={studio} selectedDate={props.selectedDate}/>
                    </StudioWrapper>
                );
            })
        ) : (
            <StudioWrapper>
                <Studio data={props.studio} selectedDate={props.selectedDate}/>
            </StudioWrapper>
        )}

    </Wrapper>
    );
}

export default CalendarBody;
