//var fullUrl = window.url + window.path;
var url = 'http://127.0.0.1/serv'
var signupUrl = url + '/register/';

var method = "POST";
var postData = new FormData();

postData.append('fn',fn);
postData.append('ln', ln);
postData.append('email',email);
postData.append('pass',pass);
postData.append('userType','1');
postData.append('userGroup','0');

// You REALLY want async = true.
// Otherwise, it'll block ALL execution waiting for server response.
var async = false;

var request = new XMLHttpRequest();

request.onload = function () {
   // You can get all kinds of information about the HTTP response.
   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
   console.log(status);
}

request.open(method, signupUrl, async);
request.send(postData);

