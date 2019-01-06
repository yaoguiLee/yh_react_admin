
import Cookie from 'js-cookie'

const SYSTEM_COOKIE_NAME = 'yh_cookie_key'

export function setCookie(username) {
  Cookie.set(SYSTEM_COOKIE_NAME, username, { expires: 7 })
}

export function getCookie() {
  return Cookie.get(SYSTEM_COOKIE_NAME)
}

export function removeCookie() {
  Cookie.remove(SYSTEM_COOKIE_NAME)
}