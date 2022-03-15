import axios from 'axios'

export class RegisterHelper {
  #numberOfAttempts = 1
  #registerUrl = undefined
  #unregisterUrl = undefined
  #interval = undefined

  constructor({ name, ip, port, prefix, version }) {
    if (!name) throw new Error('name is required')
    if (!ip) throw new Error('ip is required')
    if (!port) throw new Error('port is required')
    if (!prefix) throw new Error('prefix is required')
    if (!version) throw new Error('version is required')
    this.#registerUrl = `http://localhost:9999/${name}/${ip}/${port}/${prefix}/${version}`
    this.#unregisterUrl = `http://localhost:9999/${name}/${version}`
  }

  async register() {
    try {
      console.log('Registering...')
      return await axios.put(this.#registerUrl)
    } catch (error) {
      this.#interval = setInterval(async () => await this.tryRegister(), 1000)
      console.log(`Error : register => ${error.message}`)
    }
  }

  async unregister() {
    try {
      console.log('Unregistering...')
      return await axios.delete(this.#unregisterUrl)
    } catch (error) {
      console.log(`Error : unregister => ${error.message}`)
    }
  }

  async tryRegister() {
    console.log(`Trying to register... : ${this.#numberOfAttempts}`)
    this.#numberOfAttempts++
    try {
      await axios.put(this.#registerUrl)
      clearTimeout(this.#interval)
      this.#numberOfAttempts = 1
      console.log('Successfully registered.')
    } catch (error) {
      console.log(`Error : tryRegister => ${error.message}`)
    }
  }
}
