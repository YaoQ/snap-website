// You REALLY want async = true.
// Otherwise, it'll block ALL execution waiting for server response.
var async = true;

var postData = new FormData();
postData.append('deviceNum','1');
postData.append('command','on');
var request = new XMLHttpRequest();

if( window.setFlag === undefined )
{

    alert('IP address or others not setting! '); 
    
}

request.onload = function () {
   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
   var data = request.responseText; // Returned data, e.g., an HTML document.
   console.log(status);
}

request.open('post', url, async);

request.send(postData);
