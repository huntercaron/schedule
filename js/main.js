var times = [];

moment().format();

function CalEvent(props) {
    let eventInfo;
    if (props.time.status) {
        eventInfo = <p>{props.time.statusString}</p>;
    } else {
        eventInfo = " ";
    }
    return (
        <div className={`sched-row cal-event ${props.time.statusString}`}>
            {eventInfo}
        </div>
    );
}

function Studio(props) {
  return (
      <div className="studio-col">
          {props.data.days[0].times.map(function(time, i){
            if (i > 11)
                return <CalEvent time={time} className={`sched-row ${time.status}`} status={time.status}/>
          })}
      </div>
  );
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studios: []
        };
    }

    componentDidMount() {
      axios.get("../data/times.json")
        .then(res => {
            const studios = res.data;
            console.log(studios);
            this.setState({ studios });
        });
    }

    render() {
        return (
          <div className="sched-main">
            {this.state.studios.map(function(studio, i){
                return <Studio className="sched-row" data={studio}/>
            })}
          </div>
        );
    }

}

ReactDOM.render(
  <Calendar />,
  document.getElementById('root')
);

function populatePage(data) {

}

function getData(str) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        times = this.responseText;
        populatePage(times);
    };
    xmlhttp.open("GET", "../data/times.json", true);
    xmlhttp.send();
}

getData();
