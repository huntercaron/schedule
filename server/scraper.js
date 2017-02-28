var fs = require('fs');
var page = new WebPage(),
system = require('system'),
output = { errors: [], results: null },
facultyTimes = [];

var day = 42795;

var faculties = [
    {
        "name": "Ceramic Studio",
        "id": 11101
    },
    {
        "name": "Digital Art Studio",
        "id": 11138
    },
    {
        "name": "Wood Working",
        "id": 11099
    }
];

facultyNum = 1;
facultyName = faculties[facultyNum].name,
facultyId = faculties[facultyNum].id;


page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};

//page.open('http://www.google.com/search?q=meteo+' + system.args[1], function (status) {
page.open(('https://secure.oakville.ca/iris/Facilities/FacilitiesDailyAvailability.asp?FacilityId=' + facultyId + '&FMADate=0&NavigatePage=N&FADate=' + day), function (status) {

    if (status !== 'success') {
        console.log(status);
        output.errors.push('Unable to access network');
    } else {
        console.log("shit");

        var cells = page.evaluate(function(){
            console.log("poop");

            try {
                var cells = document.querySelectorAll('img.focus-force');
                console.log(cells);
                return Array.prototype.map.call(cells, function(cell) {
                    return cell.alt;
                });
            } catch (e) {
                return [];
            }
        });

        var timeStrings;
        var availObj;

        var split = Array.prototype.map.call(cells, function(cell) {
            timeStrings = cell.split(" ");
            timeStrings[0] = timeStrings[0].slice(0, -1);

            availObj = {
                time: timeStrings[0],
                statusString: timeStrings[1],
                status: timeStrings[1] == "Available"

            };

            return availObj;
        });

        output.results = {
            facultyId: facultyId,
            facultyName: facultyName,
            days: [
                {
                    day: day,
                    times: split
                }
            ]
        };

        var path = './' + facultyName.split(' ').join('_') + '.json';

        fs.touch(path);
        var dataStream = fs.open(path, 'w');
        console.log("opened");

        facultyTimes.push(output.results);

        dataStream.write( JSON.stringify(facultyTimes, null, 4));
        console.log("written to file: " + facultyName.split(' ').join('_') + '.json');

        dataStream.close();

    }
    phantom.exit();
});
