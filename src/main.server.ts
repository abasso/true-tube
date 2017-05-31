import 'zone.js/dist/zone-node'
import 'reflect-metadata'
import 'rxjs/Rx'
import * as express from 'express'
import * as path from 'path'
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { ServerAppModule } from './app/server-app.module'
import { ngExpressEngine } from '@nguniversal/express-engine'
import { ROUTES } from './routes'
import { enableProdMode } from '@angular/core'
enableProdMode()
const app = express()
const port = 4200
const baseUrl = `http://localhost:${port}`

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}))

app.set('view engine', 'html')
app.set('views', 'src')

function cacheControl(req, res, next) {
  // instruct browser to revalidate in 60 seconds
  res.header('Cache-Control', 'max-age=60');
  next();
}

app.use('/assets', cacheControl, express.static(path.join(__dirname, '..', 'src', 'assets'), {maxAge: 30}))

app.use('/', express.static('dist', {index: false}))

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`)
    res.render('../dist/index', {
      req: req,
      res: res
    })
    console.timeEnd(`GET: ${req.originalUrl}`)
  })
})

app.listen(4200,() => {
	console.log(`Listening at ${baseUrl}`)
})