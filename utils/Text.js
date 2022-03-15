import slug from 'slug'

class TextHelper {
  constructor() {
    if (TextHelper.instance instanceof TextHelper) {
      return TextHelper.instance
    } else {
    }
    Object.freeze(this)
    TextHelper.instance = this
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  removeSpace(text) {
    if (typeof text !== 'string') return
    return text.replace(/ /g, '')
  }

  /**
   *
   * @param {string} text
   * @param {string} seperator
   * @returns {string}
   */
  slugToCamelCase(text, seperator = '-') {
    if (typeof text !== 'string') return
    return text
      .split(seperator)
      .map((el, i) => {
        if (i === 0) return el
        return el.charAt(0).toUpperCase() + el.slice(1)
      })
      .join('')
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  toCamelCase(text) {
    if (typeof text !== 'string') return
    return this.convertCharsToEnglish(text)
      .toLowerCase()
      .split(' ')
      .map((el, i) => {
        if (i === 0) return el
        return el.charAt(0).toUpperCase() + el.slice(1)
      })
      .join('')
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  toSlug(text) {
    if (typeof text !== 'string') return
    return slug(text)
  }

  /**
   *
   * @param {number} length default 8
   * @returns
   */
  randomString(length = 8) {
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  convertCharsToEnglish(text) {
    return text
      .replace(/Ğ/g, 'g')
      .replace(/Ü/g, 'u')
      .replace(/Ş/g, 's')
      .replace(/I/g, 'i')
      .replace(/İ/g, 'i')
      .replace(/Ö/g, 'o')
      .replace(/Ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
  }
}

export default new TextHelper()
