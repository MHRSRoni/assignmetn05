//dependencies
const fs = require("fs")
const url = require("url")
const path = require("path")

const baseDir = "./public"
mainReqResHandler = (req, res) =>{
    const parsedUrl = url.parse(req.url)
    const pathName = parsedUrl.pathname.replace(/^\/|\/$/g,"")
    const content = ""
    if(pathName === ""){
        res.writeHead(200)
        res.write(fs.readFileSync("./index.html","utf-8"))
        res.end()
    }
    else{
        try{
            let content = fs.readFileSync(path.join(baseDir,pathName),"utf8")
        res.writeHead(200)
        res.write(content)
        res.end()
        }
        catch(err){
            res.writeHead(404)
            res.write("not found")
            res.end()
        }
    }

    
}

//exporting the handler
module.exports = mainReqResHandler