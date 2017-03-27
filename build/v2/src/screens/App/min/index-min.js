var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import moment from 'moment';
import StudioMenu from '../StudioMenu';
import StudioPage from '../StudioPage';
import ViewAllPage from '../ViewAllPage';
import MemberInfo from '../MemberInfo';
import studiosData from '../../../data/times.json';
import Wrapper from './Wrapper';

var _ref = _jsx(Route, {
    path: '/member-info',
    component: MemberInfo
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: studiosData
        };
    }

    componentDidMount() {
        /*
        To improve performance for the proof of concept, the fetching has been removed
        uncomment this to use the live data
         fetch("http://qep.today/data/times.json")
        .then((response) => response.json())
        .then((responseJson) => {
            console.log( responseJson);
            this.setState({
                studios: responseJson
            });
        })
        .catch((error) => {
            console.error(error);
        });
        */
    }

    render() {
        return _jsx(Router, {}, void 0, this.state.studios && _jsx(Wrapper, {}, void 0, _jsx(Route, {
            exact: true,
            path: '/',
            render: () => _jsx(StudioMenu, {
                studios: this.state.studios
            })
        }), _ref, _jsx(Route, {
            path: '/view-all/date/:year-:month-:day',
            render: ({ match }) => _jsx(ViewAllPage, {
                match: match,
                studios: this.state.studios
            })
        }), _jsx(Route, {
            path: '/studio/:facultyClass/date/:year-:month-:day',
            render: ({ match }) => _jsx(StudioPage, {
                match: match,
                studio: this.state.studios.find(s => s.facultyClass === match.params.facultyClass)
            })
        }), _jsx(Route, {
            path: '/studio/:facultyClass',
            exact: true,
            render: ({ match }) => _jsx(Redirect, {
                to: `/studio/${match.params.facultyClass}/date/${moment().format('YYYY[-]MM[-]DD')}`
            })
        }), _jsx(Route, {
            path: '/view-all',
            exact: true,
            render: () => _jsx(Redirect, {
                to: `/view-all/date/${moment().format('YYYY[-]MM[-]DD')}`
            })
        })));
    }
}

export default App;
