
console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
	 console.log('> Listening at' + uri +'\n')
	 if(autoOpenBrowser && process.env.NODE_ENV !=='testing'){
	 	opn(uri)
	 }
	 _resolve()
})
var server = app.listen(port)

const jsonServer = requier('json-server')
const aipServer = jsonServer.create()
const apiRouter = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

apiServer.use(middlewares)
aipSErver.listen(port + 1,() => {
	console.log('json Server is running')
})

module.exports = {
	ready:readyPromise,
	close:() =>{
		server.close()
	}
}
