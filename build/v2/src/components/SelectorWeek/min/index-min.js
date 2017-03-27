var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import Wrapper from './Wrapper';
import SelectorDay from '../SelectorDay';

class SelectorWeek extends React.Component {
    render() {
        let days = [];
        let day = this.props.startDate;
        let scope = this;

        while (day <= this.props.endDate) {
            days.push(day);
            day = day.clone().add(1, 'd');
        }

        let selectedWeek = this.props.selectedDate.clone().startOf("week").format("W") === this.props.startDate.format("W") ? "selected-week" : "";

        return _jsx(Wrapper, {
            className: `${selectedWeek}`
        }, void 0, days.map(function (day, i) {
            return _jsx(SelectorDay, {
                selectedDate: scope.props.selectedDate,
                currentMonth: scope.props.currentMonth,
                day: day,
                onSelectedDateChange: scope.props.onSelectedDateChange
            }, i);
        }));
    }
}

export default SelectorWeek;
