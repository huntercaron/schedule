import React, { Component }                     from 'react';
import moment                                   from 'moment'
import HeaderArea                               from '../../components/HeaderArea'
import StudioInfo                               from '../../components/StudioInfo'
import DateSelector                             from '../../components/DateSelector'
import CalendarBody                             from '../../components/CalendarBody'
import CalTimes                                 from '../../components/CalTimes'
import Wrapper                                  from './Wrapper'
import CalendarBox                              from './CalendarBox'
import CalendarCol                              from './CalendarCol'

class StudioPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDate: this.grabNewDate()
        }

        this.grabNewDate = this.grabNewDate.bind(this);
        this.handleSelectedDate = this.handleSelectedDate.bind(this);
    }

    grabNewDate() {
        let selectedDate = moment();

        if (this.props.match.params.year !== null) {
            selectedDate.set('year', this.props.match.params.year);
            selectedDate.set('month', this.props.match.params.month-1);
            selectedDate.set('date', this.props.match.params.day);
        }


        return selectedDate;
    }

    handleSelectedDate() {
        this.setState({
            selectedDate: this.grabNewDate()
        });
    }

    render() {
        return(
            <Wrapper>
                <HeaderArea text="Studio Schedule">
                    <StudioInfo studio={this.props.studio}/>
                </HeaderArea>

                <CalendarCol>
                    <DateSelector
                        selectedDate={this.grabNewDate()}
                        onSelectedDateChange={this.handleSelectedDate}/>

                    <CalendarBox>
                        <CalTimes />

                        <CalendarBody
                            studio={this.props.studio}
                            selectedDate={this.grabNewDate()}/>
                    </CalendarBox>
                </CalendarCol>

            </Wrapper>
        )
    }
}

export default StudioPage;
