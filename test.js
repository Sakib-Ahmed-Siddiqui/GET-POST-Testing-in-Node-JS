const express = require('express')
const app = express()
const port = 3000

const dateObject = new Date();

const date = (`0 ${dateObject.getDate()}`).slice(-2);
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
//const milisecounds = dateObject.getMiliSeconds();

var crypto = require("crypto");


var timestart
var timeend, timedif

var fs = require('fs');


app.get('/get/', (req, res) => {
	/*
	function called_(){
		res.send('Get Method Called')
	}
	*/
	var id = crypto.randomBytes(10).toString('hex');
	console.time(id + " GET Called " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
	//called_()
	console.timeEnd(id + " GET Called " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)

	/*
	fs.appendFile('startlog.txt', id + " GET Called " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "\n", function (err) {
  		if (err) throw err;
	});

	*/

	function get_served_(){
		res.send('Get Method Served')
	}

	console.time(id + " GET Served " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
	get_served_()
	console.timeEnd(id + " GET Served " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)


	fs.appendFile('endlog.txt', id + " GET Served " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "\n", function (err) {
  		if (err) throw err;
  		//console.log('Saved!');
	});


	//res.send('Get Method Called')
	//console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ":" + milisecounds + " GET called " + id);
	//console.time(res.send('Get Method Called'))
	
})

app.post('/post/', (req, res) => {
	
	var id = crypto.randomBytes(10).toString('hex');
	console.time(id + " POST Called " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
	//called_()
	console.timeEnd(id + " POST Called " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)

	function post_served_(){
		res.send('POST Method Served')
	}

	console.time(id + " POST Served " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
	post_served_()
	console.timeEnd(id + " POST Served " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)


	fs.appendFile('endlog.txt', id + " POST Served " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + "\n", function (err) {
  		if (err) throw err;
  		//console.log('Saved!');
	});

	
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})