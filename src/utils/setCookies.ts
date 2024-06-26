export function setCookie(name: string, value: string, days: number) {
  const date = new Date()

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()

  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

export function getCookie(name: string): string {
  const value = '; ' + document.cookie
  const parts: string[] = value.split('; ' + name + '=')

  if (parts.length === 2) {
    const cookie = parts.pop()?.split(';').shift()

    return cookie ?? ''
  }

  return ''
}

export function deleteCookie(name: string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}
