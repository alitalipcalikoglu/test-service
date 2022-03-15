import jwt from 'jsonwebtoken'

class JwtHelper {
  constructor() {
    if (JwtHelper.instance instanceof JwtHelper) {
      return JwtHelper.instance
    }
    Object.freeze(this)
    JwtHelper.instance = this
  }

  /**
   *
   * @param {object} payload
   * @param {string} secretKey
   * @param {{expiresIn : "12h"}} options 12h
   * @returns {string}
   */
  generate(payload = {}, secretKey, options = {}) {
    options.expiresIn = options.expiresIn || '12h'
    const token = jwt.sign(payload, secretKey, options)
    return token
  }

  /**
   *
   * @param {string} token
   * @param {string} secretKey
   * @returns {*}
   */
  verify(token, secretKey) {
    let verify
    try {
      verify = jwt.verify(token, secretKey)
      return verify
    } catch (error) {
      return false
    }
  }
}

export default new JwtHelper()
