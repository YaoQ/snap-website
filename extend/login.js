var url = 'http://127.0.0.1/serv'
var signupUrl = url + '/register/';

var method = "POST";
var postData = new FormData();

postData.append('email',email);
postData.append('pass',pass);

// You REALLY want async = true.
// Otherwise, it'll block ALL execution waiting for server response.
var async = false;

var request = new XMLHttpRequest();
var token;

request.onload = function () {
   // You can get all kinds of information about the HTTP response.
   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
   var responseJson= JSON.parse(request.responseText);
   token=responseJson.token;
   alert(token);
   console.log(status);
}

request.open(method, signupUrl, async);
request.send(postData);

return token;


