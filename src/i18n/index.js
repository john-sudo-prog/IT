import zhCN from './zh-CN.js'
import zhTW from './zh-TW.js'
import en from './en.js'

// 语言包
export const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en
}

class Lang {
  constructor() {
    this.locale = localStorage.getItem('locale') || 'zh-TW'
    this.messages = messages
  }

  t(key) {
    const keys = key.split('.')
    let result = this.messages[this.locale]
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k]
      } else {
        return key
      }
    }
    
    return result
  }

  setLocale(locale) {
    this.locale = locale
    localStorage.setItem('locale', locale)
  }
}

export default new Lang() 