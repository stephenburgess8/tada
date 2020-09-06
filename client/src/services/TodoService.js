import axios from "axios"
import router from '../router'

export default {
  async getTodos(userId, token) {
    let res = await axios.get("http://127.0.0.1:80/api/todos", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    return res.data
  },
  async getTodoSingle(userId, todoId, token) {
    let res = await axios.get("http://127.0.0.1:80/api/todo/" + todoId,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    return res.data
  },
  async newTodo(data, token) {
    let res = await axios.post("http://127.0.0.1:80/api/todos/", data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': data.email,
            'Content-Type': 'application/json'
        }
    })
    const path = "/todo/" + res.data.insertedId
    router.push({path})
  },
  async markTodoDone(userId, todoId, token) {
    await axios.delete("http://127.0.0.1:80/api/todo/" + todoId, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    const path = "/"
    router.push({path})
  }
}
