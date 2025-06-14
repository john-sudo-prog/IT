declare module '../i18n' {
  interface Lang {
    locale: string
    messages: Record<string, any>
    t(key: string): string
    setLocale(locale: string): void
  }

  const lang: Lang
  export default lang
  export const messages: Record<string, any>
} 