import bcrypt from 'bcrypt'

class BcryptHelper {
  constructor() {
    if (BcryptHelper.instance instanceof BcryptHelper) {
      return BcryptHelper.instance
    }
    Object.freeze(this)
    BcryptHelper.instance = this
  }

  /**
   *
   * @param {string} text
   * @param {number} saltRounds
   * @returns {string}
   */
  async encrypt(text, saltRounds = 10) {
    const hash = await bcrypt.hash(text, saltRounds)
    return hash
  }

  /**
   *
   * @param {string} text
   * @param {string} hash
   * @returns {boolean}
   */
  async decrypt(text, hash) {
    const compare = await bcrypt.compare(text, hash)
    return compare
  }
}

export default new BcryptHelper()
