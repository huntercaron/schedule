var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React, { Component } from 'react';
import moment from 'moment';
import HeaderArea from '../../components/HeaderArea';
import DateSelector from '../../components/DateSelector';
import CalendarBody from '../../components/CalendarBody';
import CalTimes from '../../components/CalTimes';
import Wrapper from './Wrapper';
import CalendarBox from './CalendarBox';

var _ref = _jsx(HeaderArea, {
    text: 'All Studios'
});

var _ref2 = _jsx(CalTimes, {});

class ViewAllPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: this.grabNewDate()
        };

        this.grabNewDate = this.grabNewDate.bind(this);
        this.handleSelectedDate = this.handleSelectedDate.bind(this);
    }

    grabNewDate() {
        let selectedDate = moment();
        selectedDate.set('year', this.props.match.params.year);
        selectedDate.set('month', this.props.match.params.month - 1);
        selectedDate.set('date', this.props.match.params.day);

        return selectedDate;
    }

    handleSelectedDate() {
        this.setState({
            selectedDate: this.grabNewDate()
        });
    }

    render() {
        return _jsx(Wrapper, {}, void 0, _ref, _jsx(DateSelector, {
            selectedDate: this.grabNewDate(),
            onSelectedDateChange: this.handleSelectedDate
        }), _jsx(CalendarBox, {}, void 0, _ref2, _jsx(CalendarBody, {
            viewAll: true,
            studios: this.props.studios,
            selectedDate: this.grabNewDate()
        })));
    }
}

export default ViewAllPage;
