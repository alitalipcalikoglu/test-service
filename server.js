import 'dotenv/config'
import { app } from './app.js'
import { RegisterHelper } from './services/register.js'
import ip from 'ip'

const { NAME, VERSION, ROUTE_PREFIX } = process.env

const server = app.listen(0)

server.on('listening', async () => {
  const { port } = server.address()

  const service = {
    name: NAME,
    ip: ip.address(),
    port: port,
    prefix: ROUTE_PREFIX,
    version: VERSION,
    address: `http://${ip.address()}:${port}/${ROUTE_PREFIX}/${VERSION}`,
  }

  const helper = new RegisterHelper(service)
  await helper.register()

  process.on('uncaughtException', async (e) => {
    console.log('uncaughtException')
    console.log(e)
  })

  process.on('SIGINT', async () => {
    console.log('SIGINT')
    await helper.unregister()
    process.exit(0)
  })

  process.on('SIGTERM', async () => {
    console.log('SIGTERM')
    process.exit(0)
  })

  console.log('Service', JSON.stringify(service, null, 2))
})
