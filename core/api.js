import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.kontenbase.com/query/api/v1/59fa6906-b8cc-4b38-918e-7bb1c389b40a/todo-app'
})