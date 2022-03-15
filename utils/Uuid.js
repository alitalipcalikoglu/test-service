import { v4, validate, version } from 'uuid'

class UuidHelper {
  constructor() {
    if (UuidHelper.instance instanceof UuidHelper) {
      return UuidHelper.instance
    }
    Object.freeze(this)
    UuidHelper.instance = this
  }

  /**
   *
   * @returns {string}
   */
  generate() {
    return v4()
  }

  /**
   * @param {string} uuid
   * @returns {boolean}
   */
  validate(uuid) {
    return validate(uuid)
  }

  /**
   * @param {string} uuid
   * @returns {number}
   */
  getVersion(uuid) {
    return version(uuid)
  }
}

export default new UuidHelper()
