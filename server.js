//dependencies
const http = require("http")
const mainReqResHandler = require("./handler/mainReqResHandler")


//Server information
const HOSTNAME = "127.0.0.1"
const PORT = 3000


//module main object serverProvider
const serverProvider = {}

serverProvider.createServer = () => {
    const server = http.createServer(mainReqResHandler)
    server.listen(PORT, HOSTNAME, () => {
        console.log("running on "+ HOSTNAME + ":" + PORT)
    })
    //server error handling
    server.on("error", err =>{
        if(err.code === "EADDRINUSE"){
            console.log("A server is already running on this port")
        }
        else if(err.code === "ENOTFOUND"){
            console.log("HostName not valid ")
        }
        else{
            console.log(err.message)
        }
    })
}


//exporting serverProvider
module.exports = serverProvider