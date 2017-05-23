const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();

/**
 * 这里我们定义了一个常量isProduction，它判断当前环境是否是production环境。
 * 如果是，就使用缓存，如果不是，就关闭缓存。在开发环境下，关闭缓存后，
 * 我们修改View，可以直接刷新浏览器看到效果，否则，每次修改都必须重启Node程序，会极大地降低开发效率。

 * Node.js在全局变量process中定义了一个环境变量env.NODE_ENV，
 * 为什么要使用该环境变量？因为我们在开发的时候，环境变量应该设置为'development'，
 * 而部署到服务器时，环境变量应该设置为'production'。
 * 在编写代码的时候，要根据当前环境作不同的判断。

 * 注意：生产环境上必须配置环境变量NODE_ENV = 'production'，
 * 而开发环境不需要配置，实际上NODE_ENV可能是undefined，
 * 所以判断的时候，不要用NODE_ENV === 'development'。
 */
const isProduction = process.env.NODE_ENV === 'production';

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// static file support:
if (! isProduction) {
    let staticFiles = require('./static_files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:
app.use(controller());

app.listen(3030);
console.log('app started at port 3030...');