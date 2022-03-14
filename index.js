const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')


const app = new Koa()
const router = new Router()

router.prefix('/api')

router.get('/', ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'Hello World'
})

router.get('/api', ctx => {
    const params = ctx.request.query;
    ctx.body = {
        name: params.name,
        age: params.age
    }
    console.log(ctx);
    console.log(ctx.request);
})

router.post('/post', async (ctx) => {
    let {body} = ctx.request
    console.log(body)
    console.log(ctx.request)
    ctx.body = {
        ...body
    }
})

app.use(koaBody())
app.use(cors())
app.use(json({pretty: false, param: 'pretty'}))

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)