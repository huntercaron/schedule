var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React, { Component } from 'react';
import moment from 'moment';
import InnerWrapper from './InnerWrapper';
import WrapperLink from './WrapperLink';

class SelectorDay extends Component {
    constructor(props) {
        super(props);
        this.handleSelectedDateChange = this.handleSelectedDateChange.bind(this);
    }

    handleSelectedDateChange(e) {
        this.props.onSelectedDateChange();
    }

    render() {
        let selectedDay = this.props.selectedDate.format("D") === this.props.day.format("D") && this.props.selectedDate.format("M") === this.props.day.format("M") ? "selected-day" : "";
        let notThisMonth = this.props.currentMonth.month() !== this.props.day.month() ? "not-current-month" : "";
        let today = moment().format("D") === this.props.day.format("D") && moment().format("M") === this.props.day.format("M") ? "selector-day-today" : "";

        return _jsx(WrapperLink, {
            to: `${this.props.day.format('YYYY[-]MM[-]DD')}`,
            replace: true,
            'data-day': this.props.day.format(),
            onClick: this.handleSelectedDateChange,
            className: `selector-day ${selectedDay} ${notThisMonth} ${today}`
        }, void 0, _jsx(InnerWrapper, {}, void 0, _jsx('h4', {
            className: 'day-num day-info'
        }, void 0, this.props.day.format("D"))));
    }
}

export default SelectorDay;
