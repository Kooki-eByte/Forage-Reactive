import { call } from "./admin-api.js"
const localStorageKey = "__kgba_2020_token__"

// if response contained user data and token, set token and then return user data
function handleUserResponse(r) {
  if (!r) return null
  if (r.token) {
    localStorage.setItem(localStorageKey, r.token)
  }

  return r.user
}

function login({ email, password }) {
  // return call(`/auth/login`, { body: { email, password } }).then(handleUserResponse)
  return call(`/auth/login`, { body: { email, password } }).then((response) => response)
}

export { login }