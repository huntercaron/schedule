var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import Wrapper from './Wrapper';

var _ref = _jsx('i', {
    className: 'material-icons'
}, void 0, 'navigate_before');

var _ref2 = _jsx('i', {
    className: 'material-icons'
}, void 0, 'navigate_next');

class MonthControls extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrentMonthChange = this.handleCurrentMonthChange.bind(this);
        this.handleViewMonthChange = this.handleViewMonthChange.bind(this);
    }

    handleCurrentMonthChange(month) {
        this.props.onCurrentMonthChange(month);
    }

    handleViewMonthChange(view) {
        this.props.onViewMonthChange(view);
    }

    render() {
        let monthNavStyle = {
            display: this.props.viewMonth ? "block" : "none"
        };

        let openMonthArrowStyle = {
            transform: this.props.viewMonth ? "rotate(180deg)" : "rotate(0deg)"
        };

        return _jsx(Wrapper, {}, void 0, _jsx('button', {
            className: 'month-controls',
            style: monthNavStyle,
            onClick: () => this.handleCurrentMonthChange(this.props.currentMonth.clone().subtract(1, "months"))
        }, void 0, _ref), _jsx('h4', {
            className: 'current-month',
            onClick: this.handleViewMonthChange
        }, void 0, this.props.currentMonth.format("MMMM Y"), ' ', _jsx('i', {
            className: 'material-icons',
            style: openMonthArrowStyle,
            'aria-hidden': 'true'
        }, void 0, 'arrow_drop_down'), ' '), _jsx('button', {
            className: 'month-controls',
            style: monthNavStyle,
            onClick: () => this.handleCurrentMonthChange(this.props.currentMonth.clone().add(1, "months"))
        }, void 0, _ref2));
    }
}

export default MonthControls;
