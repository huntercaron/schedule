var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import Wrapper from './Wrapper';
import CalEvent from '../CalEvent';

const Studio = props => {
    const eventHeight = 25;
    let count = 1;
    let selectedDate = parseInt(props.selectedDate.format("d"), 10);

    return _jsx(Wrapper, {}, void 0, props.data.days[selectedDate].times.map(function (time, i) {
        if (i > 13) {
            if (i !== props.data.days[selectedDate].times.length - 1) {
                if (props.data.days[selectedDate].times[i + 1].statusString !== time.statusString || time.statusString === "Closed") {

                    let eventStyle = {
                        height: count * eventHeight + "px"
                    };
                    count = 1;

                    return _jsx(CalEvent, {
                        time: time,
                        className: `sched-row ${time.status}`,
                        status: time.status,
                        style: eventStyle
                    }, i);
                } else {
                    count++;
                }
            }
        }
        return null;
    }));
};

export default Studio;
