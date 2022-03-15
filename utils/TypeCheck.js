class TypeCheckHelper {
  constructor() {
    if (TypeCheckHelper.instance instanceof TypeCheckHelper) {
      return TypeCheckHelper.instance
    }
    Object.freeze(this)
    TypeCheckHelper.instance = this
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isArray(data) {
    if (!Array.isArray(data)) return false
    return true
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isBoolean(data) {
    if (typeof data !== 'boolean') return false
    return true
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isFunction(data) {
    if (typeof data !== 'function') return false
    return true
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isNull(data) {
    if (data !== null) return false
    return true
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isNumber(data) {
    if (typeof data !== 'number') return false
    return true
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isObject(data) {
    if (Array.isArray(data) === true || data === null || typeof data !== 'object') return false
    return true
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isString(data) {
    if (typeof data !== 'string') return false
    return true
  }

  /**
   *
   * @param {*} data
   * @returns {boolean}
   */
  isUndefined(data) {
    if (typeof data !== 'undefined') return false
    return true
  }
}

export default new TypeCheckHelper()
