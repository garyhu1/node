var fs = require("fs");
var koa = require("koa");
var router = require("koa-router")();
var bodyParser = require("koa-bodyparser");

var app = new koa();

var files = fs.readdirSync(__dirname+"/counters");

var js_files = files.filter((f) => {
    return f.endsWith(".js");
});

for(var f of js_files){
    console.log(`process koa: ${f} ...`);
    let mapping = require(__dirname+"/counters/"+f);
    for(var url in mapping){
        if(url.startsWith("GET")){
            var path = url.substring(4);
            router.get(path,mapping[url]);
            console.log(`GET: ${path}`);
        }else if(url.startsWith("POST")){
            var path = url.substring(5);
            router.post(path,mapping[url]);
            console.log(`POST: ${path}`);
        }else {
            //无效的url
            console.log(`invailed url: ${url}`);
        }
    }
}

app.use(bodyParser());
app.use(router.routes());

app.listen(3003);
