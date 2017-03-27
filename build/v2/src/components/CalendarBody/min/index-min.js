var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import Wrapper from './Wrapper';
import StudioIcon from '../StudioIcon';
import Studio from '../Studio';

const CalendarBody = props => {
    return _jsx('div', {
        className: 'sched-main sched-col'
    }, void 0, props.viewAll ? props.studios.map(function (studio, i) {
        return _jsx(Wrapper, {}, i, _jsx(StudioIcon, {
            name: studio.facultyClass,
            size: 'small'
        }), _jsx(Studio, {
            className: 'sched-row',
            data: studio,
            selectedDate: props.selectedDate
        }));
    }) : _jsx(Studio, {
        className: 'sched-row',
        data: props.studio,
        selectedDate: props.selectedDate
    }));
};

export default CalendarBody;
