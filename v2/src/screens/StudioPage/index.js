import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import moment                                   from 'moment'
import BackButton                               from '../../components/BackButton'
import HeaderArea                               from '../../components/HeaderArea'
import StudioInfo                               from '../../components/StudioInfo'
import DateSelector                             from '../../components/DateSelector'
import CalendarBody                             from '../../components/CalendarBody'
import CalTimes                                 from '../../components/CalTimes'
import Wrapper                                  from './Wrapper'
import CalendarBox                              from './CalendarBox'

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
        selectedDate.set('year', this.props.match.params.year);
        selectedDate.set('month', this.props.match.params.month-1);
        selectedDate.set('date', this.props.match.params.day);
        console.log(selectedDate.format('YYYY[-]MM[-]DD'));

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
                <HeaderArea text={this.props.studio.facultyClass}>
                    <StudioInfo studio={this.props.studio}/>
                </HeaderArea>

                <DateSelector
                    selectedDate={this.grabNewDate()}
                    onSelectedDateChange={this.handleSelectedDate}/>

                <CalendarBox>
                    <CalTimes />

                    <CalendarBody
                        studio={this.props.studio}
                        selectedDate={this.grabNewDate()}/>
                </CalendarBox>

            </Wrapper>
        )
    }
}

export default StudioPage;
