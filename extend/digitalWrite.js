/*
* input parameters:
*   deviceID    : device unique ID
*   unitID      : identify different units on one device 
*   ipAddress   : server IP address
*   port        : server port
*   path        : rest API routes path 
*   command     : control the unit using the commands(W/R)
*   value       : return value 
*/
var url = "http://" + ipAddress + ":" + port + path;
var method = "POST";
var postData = new FormData();

postData.append('unitID', unitID);
postData.append('command',command);

// You REALLY want async = true.
// Otherwise, it'll block ALL execution waiting for server response.
var async = true;

var request = new XMLHttpRequest();

request.onload = function () {
   // You can get all kinds of information about the HTTP response.
   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
   console.log(status);
}
 
if( window.setFlag === undefined)
 {
     alert("The first block of hardware script must set IPAddress block or others things.");
 }

request.open(method, url, async);
request.send(postData);

/**//////////////////////////////////////////////////////////// reference

    // This function will check to see if a board has been established and if it has, will send a command
    // message to the server
function sendCommand(msg, board, type) {
    if (window.xi_debugLevel >= 1) {
        console.log('sendCommand: ' + msg + ' ' + board + ' ' + type);
    }
    for (var index = 0; index < window.xi_webSocketsArray.length; index++) {
        if (window.xi_webSocketsArray[index].id === board) {
            if (window.xi_debugLevel >= 2)
                console.log('sendCommand: Message: ' + msg + ' board: ' + board);
            // send out message
            window.xi_webSocketsArray[index].ws.send(msg);
            return;
        }
    }
    // board was not established
    alert(type + ' IP address for board ' + boardID + ' was not set');
}





