var fn_index = async(ctx,next) => {
    ctx.response.body = `<h1>登录界面</h1>
          <form action="/signin" method="post">
             <p>Name: <input name="name" value="garyhu"/></p>
             <p>Password: <input name="password" type="password"/></p>
             <p><input type="submit" value="Submit"/></p>
          </form>
    `;
};

var fn_signin = async(ctx,next) => {
    var  n = ctx.request.body.name||"";
    var  p = ctx.request.body.password||"";
    console.log(`signin with name: ${n},password: ${p}`); 
    if(n==="garyhu"&&p==="123456"){
        ctx.response.body = `<h1>Welcome,${n}!</h1>`;
    }else {
        ctx.response.body = `<h1>Login Failed</h1>
               <p><a href="/">Try again</p>
        `;
    }   
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};
