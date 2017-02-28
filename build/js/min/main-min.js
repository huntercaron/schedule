var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var times = [];

moment().format();

function CalEvent(props) {
    let eventInfo;
    if (props.time.status) {
        eventInfo = _jsx("p", {}, void 0, props.time.statusString);
    } else {
        eventInfo = _jsx("p", {}, void 0, props.time.statusString);
    }
    return _jsx("div", {
        className: `sched-row cal-event ${props.time.statusString}`
    }, void 0, eventInfo);
}

function Studio(props) {
    return _jsx("div", {
        className: "studio-col"
    }, void 0, props.data.days[0].times.map(function (time, i) {
        if (i > 11) return _jsx(CalEvent, {
            time: time,
            className: `sched-row ${time.status}`,
            status: time.status
        });
    }));
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: []
        };
    }

    componentDidMount() {
        axios.get("../data/times.json").then(res => {
            const studios = res.data;
            console.log(studios);
            this.setState({ studios });
        });
    }

    render() {
        return _jsx("div", {
            className: "sched-main"
        }, void 0, this.state.studios.map(function (studio, i) {
            return _jsx(Studio, {
                className: "sched-row",
                data: studio
            });
        }));
    }

}

ReactDOM.render(_jsx(Calendar, {}), document.getElementById('root'));

function populatePage(data) {}

function getData(str) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        times = this.responseText;
        populatePage(times);
    };
    xmlhttp.open("GET", "../data/times.json", true);
    xmlhttp.send();
}

getData();

//# sourceMappingURL=main-min.js.map