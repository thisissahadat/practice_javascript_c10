var http=require('http');
var URL=require('url');



var server=http.createServer(function (req,res) {

    var myURL="https://ostad.app/dashboard/my-courses/63202ce744c5e613ea5c96cb/videos";
    var myURLObj=URL.parse(myURL,true);
    var myHostname=myURLObj.host;
    var pathname=myURLObj.pathname;
    var searchname=myURLObj.search;

    res.writehead(200,{'Content-Type':'text/html'})
    res.write(myHostname);
    res.end();
});

server.listen(5050);
console.log("server run success");