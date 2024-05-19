export function setCookie(name: string, value: string, days: number) {
  const date = new Date()

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()

  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

export function getCookie(name: string) {
  const value = '; ' + document.cookie
  const parts: string[] = value.split('; ' + name + '=')

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift()
  }
}
