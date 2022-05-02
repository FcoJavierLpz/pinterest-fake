import axios, { AxiosError, AxiosResponse } from 'axios'
import { getErrorMessage, reportError } from '../services/logger'
import config from '../config/config'
import * as STATUS from '../constants/http/status'
import * as HEADERS from '../constants/http/headers'

const instance = axios.create({
  headers: {
    [HEADERS.NAME.AUTHORIZATION]: `${HEADERS.VALUE.CLIENT_ID} ${config.apiKey}`
  }
})

const handleError = async (error: AxiosError): Promise<AxiosError> => {
  const expectedError =
    error?.response &&
    error.response.status >= STATUS.CODE.BAD_REQUEST &&
    error.response.status < STATUS.CODE.INTERNAL_SERVER_ERROR

  if (!expectedError) {
    reportError({ message: getErrorMessage(error) })
  }

  return Promise.reject(error)
}

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  handleError
)

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
}
