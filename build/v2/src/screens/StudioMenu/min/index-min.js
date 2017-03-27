var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React, { Component } from 'react';
import StudioMenuItem from '../../components/StudioMenuItem';
import ViewAllButton from '../../components/ViewAllButton';
import IntroArea from '../../components/IntroArea';
import Wrapper from './Wrapper';
import MenuBox from './MenuBox';
import MemberInfoLink from './MemberInfoLink';

var _ref = _jsx(IntroArea, {
    title: 'Good Afternoon',
    text: 'Select a studio to see it\'s availibility.'
});

var _ref2 = _jsx('div', {}, void 0, 'Loading...');

var _ref3 = _jsx(ViewAllButton, {});

var _ref4 = _jsx(MemberInfoLink, {});

class StudioMenu extends Component {
    render() {
        return _jsx(Wrapper, {}, void 0, _ref, _jsx(MenuBox, {}, void 0, this.props.studios ? this.props.studios.map((studio, i) => {
            return _jsx(StudioMenuItem, {
                studioName: studio.facultyName,
                studioClass: studio.facultyClass,
                studioTimes: studio.days[0]
            }, i);
        }) : _ref2, _ref3, _ref4));
    }
}

export default StudioMenu;
