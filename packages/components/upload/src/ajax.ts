import { RequestOptions } from './upload-content'
import { UploadProgressEvent } from './upload'
export function httpRequest(options: RequestOptions) {
  const {
    method,
    file,
    name,
    action,
    headers,
    onError,
    onSuccess,
    onProgress,
    data
  } = options
  const xhr = new XMLHttpRequest()
  xhr.open(method, action, true)
  xhr.upload.addEventListener('progress', (e) => {
    const processEvent = e as UploadProgressEvent
    processEvent.percent = e.total > 0 ? (e.loaded / e.total) * 100 : 0
    onProgress(processEvent)
  })

  if (headers) {
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key])
    })
  }

  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })
  }

  formData.append(name, file)

  xhr.onload = function () {
    if (xhr.status < 300 && xhr.status >= 200) {
      onSuccess(xhr.response)
    } else {
      onError({ status: xhr.status, response: xhr.response })
    }
  }

  xhr.onerror = function (e) {
    onError(e)
  }
  xhr.send(formData)
}
