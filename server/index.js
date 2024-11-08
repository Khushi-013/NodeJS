const http = require("http");
//http is a built-in module in nodejs using this we can create our own server
//const myServer = http.createServer((req, res) => {});
//we need a handler to handle this server for processing incoming request
//req obj --> have all data containing ip address of user, to what user has requested, who is the user all information of client side
//res obj --> used to send the respond

const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
//we can also apply a switch case on req.url
    // fs.appendFile("log.txt", log, (err, data) => {
    //     res.end("Hello From Server Again");
    // });
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case '/': res.end("HomePage");
            break;
            case '/about': res.end("I am Khushi Sinha");
            break;
            default:
                res.end("404 Not Found");
        }
    })
}); // this is a callback function
//to run this server we need a port no.
//as now we are in our local machine so all the ports are opened
//one server can only be run on one port
myServer.listen(8000, () => console.log("Server Started!"));
//if a connection is established and everything is running smoothly than will see a message saying Server Started!
