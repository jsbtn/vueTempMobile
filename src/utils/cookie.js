import Cookies from 'js-cookie'
const Token = 'searchToken'
export function setToken(token) {
  return Cookies.set(Token, token)
}

export function getToken() {
  return Cookies.get(Token)
}

