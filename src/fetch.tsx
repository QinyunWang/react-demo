import { TodoDetailsPayload } from "./types/application"

const url = "http://localhost:8080/todo-item"

export const get = async () => {

  return await fetch(url, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  })
}

export const post = (data: TodoDetailsPayload) => {
  fetch(url, {
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
    method: 'POST'
  })
}

export const deleteItemById = (id: string) => {
  fetch((url + '/' + id), {
        headers: {
      'content-type': 'application/json',
    },
    method: 'DELETE'
  })
}