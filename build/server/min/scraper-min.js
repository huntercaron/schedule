var page = new WebPage(),
system = require('system'),
output = { errors: [], results: null };


//page.open('http://www.google.com/search?q=meteo+' + system.args[1], function (status) {
page.open('https://secure.oakville.ca/iris/Facilities/FacilitiesDailyAvailability.asp?FacilityId=11097&FMADate=0&NavigatePage=N&FADate=41002', function (status) {
    page.render('github.png');
    if (status !== 'success') {
        console.log("error");
        output.errors.push('Unable to access network');
    } else {
        console.log("shit");

        let times = [];

        var cells = page.evaluate(function(){
            console.log("poop");

            try {
                var cells = document.querySelectorAll('img.focus-force');
                console.log(cells);
                return Array.prototype.map.call(cells, function(cell) {

                    console.log(cell.alt);
                    //times.push(cell.alt);
                });
            } catch (e) {
                console.log(e + "no cells!");
                return [];
            }

        });

        console.log(times);

        /*
        for (let time of times) {
            console.log(time);
        }
        */





        //console.log(JSON.stringify(data, null, '    '));
    }
    phantom.exit();
});


