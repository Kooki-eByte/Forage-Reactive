import axios from "axios"

export default function call(endpoint, { body, ...customConfig } = {}) {
  // const token = window.localStorage.getItem(localStorageKey) // TODO replace with Auth middleware
  const token = null
  const headers = {
    "content-type": "application/json",
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  // Using Axios
  const config = {
    url: endpoint,
    // REACT_APP_SERVER_URL is defined in webpack
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_SERVER_URL,
    method: body ? "POST" : "GET",
    ...customConfig,
    // withCredentials: true,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.data = body instanceof FormData ? body : JSON.stringify(body)
  }
  // return the results from api
  // no error handling so that a .catch can be used on the method calling this function
  return axios(config).then((r) => r.data)
}