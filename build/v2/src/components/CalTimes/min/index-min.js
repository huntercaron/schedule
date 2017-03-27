var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import moment from 'moment';
import Wrapper from './Wrapper';

const CalTimes = props => {
    let calTimeFormat = moment().hour(7).minute(0);
    let calTimeNum = 7;
    let calTimes = [];

    while (calTimeNum <= 24) {
        calTimes.push({ "formatted": calTimeFormat.format("h:mma"), "number": calTimeNum });
        calTimeNum += 0.5;
        calTimeFormat.add(30, 'm');
    }

    return _jsx(Wrapper, {}, void 0, calTimes.map(function (time, i) {
        let hourType = !Number.isInteger(time.number) ? "half-hour" : "full-hour";
        return _jsx('div', {
            className: `time sched-row ${hourType}`,
            id: `${time.number}-time`
        }, i, time.formatted);
    }));
};

export default CalTimes;
