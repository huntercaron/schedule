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

        let selectedDate = moment();
        selectedDate.set('year', props.match.year);
        selectedDate.set('month', props.match.month);
        selectedDate.set('date', props.match.day);

        console.log(props.match.year);

        this.state = {
            selectedDate: this.grabNewDate()
        }
        console.log(this.state.selectedDate.format('YYYY[-]MM[-]DD'));

        this.grabNewDate = this.grabNewDate.bind(this);
    }

    grabNewDate() {
        let selectedDate = moment();
        selectedDate.set('year', this.props.match.year);
        selectedDate.set('month', this.props.match.month);
        selectedDate.set('date', this.props.match.day);
        console.log(selectedDate.format('YYYY[-]MM[-]DD'));

        return selectedDate;
    }

    handleSelectedDate(newDate) {
        this.setState({
            selectedDate: this.grabNewDate()
        });
    }

    render() {
        console.log(this.state.selectedDate.format('YYYY[-]MM[-]DD'));

        return(
            <Wrapper>
                <HeaderArea text={this.props.studio.facultyClass}>
                    <StudioInfo studio={this.props.studio}/>
                </HeaderArea>

                <DateSelector
                    selectedDate={this.state.selectedDate}
                    onSelectedDateChange={this.handleSelectedDate}/>

                <CalendarBox>
                    <CalTimes />

                    <CalendarBody
                        studio={this.props.studio}
                        selectedDate={this.state.selectedDate}/>
                </CalendarBox>

            </Wrapper>
        )
    }
}

export default StudioPage;
