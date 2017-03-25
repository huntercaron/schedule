import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import moment                                   from 'moment'
import BackButton                               from '../../components/BackButton'
import HeaderArea                               from '../../components/HeaderArea'
import StudioInfo                               from '../../components/StudioInfo'
import DateSelector                             from '../../components/DateSelector'
import CalendarBody                             from '../../components/CalendarBody'
import CalTimes                                 from '../../components/CalTimes'
import Wrapper                                  from './Wrapper'
import CalendarBox                              from './CalendarBox'

const StudioPage = (props) => {
    return(
        <Wrapper>
            <HeaderArea text="All Studios">

            </HeaderArea>

            <DateSelector selectedDate={moment()}/>

            <CalendarBox>
                <CalTimes />

                <CalendarBody
                    viewAll
                    studios={props.studios}
                    selectedDate={moment()}/>
            </CalendarBox>

        </Wrapper>
    )
}

export default StudioPage;
