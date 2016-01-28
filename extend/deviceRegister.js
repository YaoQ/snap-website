var url = 'http://127.0.0.1/serv'
var regDevUrl = url + '/registerdevice2/';

var method = "POST";
var postData = new FormData();

postData.append('userGroup',userGroup);
postData.append('macAddress',macAddress);
postData.append('key',key);
postData.append('name',name);

// You REALLY want async = true.
// Otherwise, it'll block ALL execution waiting for server response.
var async = false;

var request = new XMLHttpRequest();
var code;

request.onload = function () {
   // You can get all kinds of information about the HTTP response.
   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
   var responseJson = JSON.parse(request.responseText);
   code=responseJson.code;
   alert(token);
   console.log(status);
}

request.open(method, regDevUrl, async);
request.send(postData);

return code;

