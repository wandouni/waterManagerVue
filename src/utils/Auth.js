import Cookies from
const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}
