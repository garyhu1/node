var nunjuck = require("nunjucks");

function createEnv(path,options) {
     var 
         outoescape = options.outoescape&&true,
         noCache = options.noCache&&false,
         watch = options.watch&&false,
         throwOnUndefined = opts.throwOnUndefined || false,
         env = new nunjuck.Environment(
             new nunjuck.FileSystemLoader("views",{
                 noCache: noCache,
                 watch: watch,
             }),{
                 outoescape: outoescape,
                 throwOnUndefined: throwOnUndefined,
             });
      if(options.filters){
          for(var f in options.filters){

          }
      }       
}