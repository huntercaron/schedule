'use strict';

var http = require('http');

var API_KEY = '1080c0975afedcb255a2d6425d4fd354f70bd46aca283e9906bd5d871b1dc17e'

exports.getDataSet = function(id, version) {
	return new Promise(function(resolve, reject){
	    let url = 'http://api.namara.io/v0/data_sets/' + id + '/data/en-' + version +  '?api_key=' + API_KEY;
		http.get(url, response => {
			let dataStr = "";
			response.on('data', data => dataStr += data);
			response.on('end', () => resolve(dataStr));
		})
		.on('error', err => reject(new Error("Error on data fetch")));

	});
}

exports.getData = function(id, version) {
	return new Promise(function(resolve, reject){
	    let url = 'https://secure.oakville.ca/iris/Facilities/FacilitiesDailyAvailability.asp?FacilityId=11097&FMADate=0&NavigatePage=N&FADate=' + id;
        console.log(url);
        http.get(url, response => {
			let dataStr = "";
            console.log(response);
            console.log(url);

			response.on('data', data => dataStr += data);
			response.on('end', () => resolve(dataStr));
		})
		.on('error', err => reject(new Error("Error on data fetch")));

	});
}
