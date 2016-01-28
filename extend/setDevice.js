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
var path = "http://" + ipAddress + ":" + port; 
 
//Globle flag means IP address, path are set. 
window.setFlag = true; 

