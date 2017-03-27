var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React, { Component } from 'react';
import HeaderArea from '../../components/HeaderArea';
import Wrapper from './Wrapper';
import BodyText from './BodyText';

let membersInfo = "QEPCCC Guild members may purchase a monthly membership for $25 +HST. A non-resident fee of $10 +HST will be charged as applicable.\n Individual/Artist memberships are available for $35 +HST, for one month. A non-resident fee of $10 +HST will be charged as applicable. Please note there are no discounts available on this membership.\n All members must be over the age of 18.\n Please see the Front Desk for sign up options.\n \n Rules and Obligations\n Members are expected to exhibit a good understanding of the materials, tools and processes required to safely practice independently in our specialized studios.\n Members get access to the QEPCCC Wood Working Studio, Pottery Studio, Fine Arts Studio and Digital Arts Lab during studio drop-in times and can use the studios Monday-Thursday from 8 a.m.-10 p.m. on Fridays 8 a.m.-9 p.m. on weekends 8 a.m.-7 p.m. when there are no programmed classes or bookings. Some restrictions do apply. Studio schedules and facility availability can be checked online.\n Members must sign-in at customer service.\n Members must show demonstrated ability and complete prerequisite courses for access to specialized studio equipment (i.e. wood shop, pottery wheels). Details are provided in the studio descriptions below.\n Members are responsible for cleaning the studio space after use.\n Members receive half of a locker and an open storage shelf. Additional locker rental is available for members on a first-come, first-served basis. Full locker: $15 per month.\n Additional storage shelves (open) in the wood shop, ceramic studio and fine art studio can be purchased for $10 per month, per shelf.";

var _ref = _jsx(HeaderArea, {
    text: "Member Info"
});

var _ref2 = _jsx('br', {});

class MemberInfo extends Component {
    render() {
        return _jsx(Wrapper, {}, void 0, _ref, _jsx(BodyText, {}, void 0, membersInfo.split('\n').map(function (text, i) {
            return _jsx('p', {}, i, text, _ref2);
        })));
    }
}

export default MemberInfo;
