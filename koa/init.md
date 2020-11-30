## 简介

Koa 是一个新的 web 框架， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

------

## 安装

Koa 依赖 **node v7.6.0** 或 ES2015及更高版本和 async 方法支持.

你可以使用自己喜欢的版本管理器快速安装支持的 node 版本：

```
$ nvm install 7
$ npm i koa
$ node my-koa-app.js
```

------

## Hello World

```js
const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

------

## app.listen(...)

这里的 `app.listen(...)` 方法只是以下方法的语法糖:

```js
const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
```

这意味着您可以将同一个应用程序同时作为 HTTP 和 HTTPS 或多个地址：

```js
const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
```

