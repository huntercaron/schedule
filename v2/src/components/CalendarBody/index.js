import React                                    from 'react'
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
                        <IconBox>
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
