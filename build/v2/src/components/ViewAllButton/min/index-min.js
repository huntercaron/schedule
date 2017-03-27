var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React from 'react';
import moment from 'moment';
import Icon from '../Icon';
import WrapperLink from './WrapperLink';
import StudioTitle from './StudioTitle';

var _ref = _jsx(Icon, {
    icon: 'compare_arrows'
});

var _ref2 = _jsx(StudioTitle, {}, void 0, 'Compare All Studios');

const ViewAllButton = props => {
    return _jsx(WrapperLink, {
        to: `/view-all/date/${moment().format('YYYY[-]MM[-]DD')}`
    }, void 0, _ref, _ref2);
};

export default ViewAllButton;
