const fs = require("fs");

function addMapping (router,mapping) {
    for(var url in mapping){
        if(url.startsWith('GET ')){
            let path = url.substring(4);
            router.get(path,mapping[url]);
            console.log(`GET path: ${path}`);
        }else if(url.startsWith('POST ')){
            let path = url.substring(5);
            router.post(path,mapping[url]);
            console.log(`POST　path : ${path}`);
        }else if(url.startsWith('PUT ')){
            let path = url.substring('4');
            router.put(path,mapping[url]);
            console.log(`PUT path : ${path}`);
        }else if(url.startsWith('DELETE ')){
            let path = url.substring(7);
            router.del(path,mapping[url]);
            console.log(`DELETE path : ${path}`);
        }else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers (router,dir) {
    fs.readdirSync(__dirname+'/'+dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`current_dir :: ${f}`);
        let mapping = require(__dirname+'/'+dir+'/'+f);
        addMapping(mapping);
    });
}

module.exports = function(dir){
    let
        controllers_dir = dir || 'controllers'
        router = require('koa-router')();
    addControllers(router,controllers_dir);
    return router.routes();    
}