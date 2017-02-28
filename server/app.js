'use strict';

var fs = require('fs');
var express = require('express');
var http = require('http').Server(app);
var app = express();
//var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
//var getopendata = require('./server/getdata.js');

app.use(express.static('public'));

app.listen(4000, function() {
    console.log("Farting on port 3000");
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/sc', function (req, res) {
    var page = new WebPage()
    , output = { errors: [], results: null };
    if (phantom.args.length == 0) {
        console.log('You must specify a city, eg. "Paris, France"');
        phantom.exit(1);
    }
    page.open('http://www.google.fr/search?q=meteo+' + phantom.args[0], function (status) {
        if (status !== 'success') {
            output.errors.push('Unable to access network');
        } else {
            var cells = page.evaluate(function(){
                try {
                    var cells = document.querySelectorAll('.tpo tr tr')[4].querySelectorAll('td');
                    return Array.prototype.map.call(cells, function(cell) {
                        return cell.innerText.replace(/[^0-9]/g, '');
                    });
                } catch (e) {
                    return [];
                }
            });
            if (!cells || !cells.length > 0) {
                output.errors.push('No valid meteo data found');
            } else {
                output.results = {
                    city: phantom.args[0],
                    today: {
                        afternoon: cells[1],
                        morning:   cells[2],
                    },
                    tomorrow: {
                        afternoon: cells[3],
                        morning:   cells[4],
                    }
                };
            }
            console.log(JSON.stringify(output, null, '    '));
        }
        phantom.exit();
    });
})

























app.get('/scrapeDates', function(req, res){

    let url = 'https://secure.oakville.ca/iris/Facilities/FacilitiesDailyAvailability.asp?FacilityId=11097&FMADate=0&NavigatePage=N&FADate=41005';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

        var title, release, rating;
        var json = { title : "", release : "", rating : ""};
        var big;

        $('html').filter(function() {
            var data = $(this);
            console.log(data.toString());
            big = data.toString();
            //title = data.children().first().text();
            //release = data.children().last().children().text();

            //json.title = title;
            //json.release = release;
        })
    }

    // To write to the system we will use the built in 'fs' library.
    // In this example we will pass 3 parameters to the writeFile function
    // Parameter 1 :  output.json - this is what the created filename will be called
    // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
    // Parameter 3 :  callback function - a callback function to let us know the status of our function

    fs.writeFile('output.html', big, function(err){

        console.log('File successfully written! - Check your project directory for the output.json file' + err);

    })

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

        console.log('File successfully written! - Check your project directory for the output.json file' + err);

    })

    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('Check your console!')

    }) ;
});








app.get('/scrape', function(req, res){

    let url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

        var title, release, rating;
        var json = { title : "", release : "", rating : ""};

        $('.title_wrapper').filter(function() {
            var data = $(this);
            console.log(data.toString());
            title = data.children().first().text();
            release = data.children().last().children().text();

            json.title = title;
            json.release = release;
        })

        $('.star-box-giga-star').filter(function(){
            var data = $(this);
            rating = data.text();

            json.rating = rating;
        })
    }

    // To write to the system we will use the built in 'fs' library.
    // In this example we will pass 3 parameters to the writeFile function
    // Parameter 1 :  output.json - this is what the created filename will be called
    // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
    // Parameter 3 :  callback function - a callback function to let us know the status of our function

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

        console.log('File successfully written! - Check your project directory for the output.json file');

    })

    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('Check your console!')

    }) ;
});


















/*returns an array of json objects containing the columns of the dataset*/
app.get('/getdataset/:id', function(request, response) {
	getopendata.getDataSet(request.params.id, request.query.version)
	.then(data => response.json(data))
	.catch(err => {
		response.json(err);
	});
});

app.get('/getData/:id', function(request, response) {
	getopendata.getData(request.params.id, request.query.version)
	.then(data => response.json(data))
	.catch(err => {
		response.json(err);
	});
});

/*returns an array of json data sets (max size 10, the namara api doesnt seem to allow any larger per page)
  that match the query string*/
app.post('/searchfordatasets', function(request, response) {
	getopendata.searchForDataSets(request.body.query)
	.then(data => response.json(data))
	.catch(err => response.json(err));
});



app.get('/fuck', function(request, response) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            console.log(this.responseText);
    };
    xmlhttp.open("GET", "https://secure.oakville.ca/iris/Facilities/FacilitiesDailyAvailability.asp?FacilityId=11097&FMADate=0&NavigatePage=N&FADate=41005", true);
    xmlhttp.send();
    response.json("no");
});

app.get('/fucked', function(req, response) {

    var httpp = require('http');

    var options = {
      host: 'https://secure.oakville.ca',
      path: '/iris/Facilities/FacilitiesDailyAvailability.asp?FacilityId=11097&FMADate=0&NavigatePage=N&FADate=41005'
    };

    httpp.get(options, function(res) {
      console.log("Got response: " + res.statusCode);
      response.send(res.toString());
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });

    //response.send("no");
});
