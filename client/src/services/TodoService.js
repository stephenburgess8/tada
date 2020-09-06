import axios from "axios"
import router from '../router'

export default {
  async getTodos(userId, token) {
    let res = await axios.get("/api/todos", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    return res.data
  },
  async getTodoSingle(userId, todoId, token) {
    let res = await axios.get("/api/todo/" + todoId,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    return res.data
  },
  async newTodo(data, token) {
    let res = await axios.post("/api/todos/", data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': data.email,
            'Content-Type': 'application/json'
        }
    })
    const path = "/todo/" + res.data.insertedId
    router.push({path})
  },
  async markTodoDone(userId, todoId, token, singleView = true) {
    await axios.delete("/api/todo/" + todoId, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    if (singleView) {
        const path = "/"
        router.push({path})
    }
    router.go()
  }
}
