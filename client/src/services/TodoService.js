import axios from "axios"

export default {
  async getTodos(userId, token) {
    let res = await axios.get("http://localhost:4050/api/todos", {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    console.log(res.data)
    return res.data
  },
  async getTodoSingle(userId, todoId, token) {
    let res = await axios.get("http://localhost:4050/api/todos/" + todoId,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': userId
        }
    })
    return res.data
  },
  async newTodo(data, token) {
    let res = await axios.post("http://localhost:4050/api/todos/", data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User': data.email,
            'Content-Type': 'application/json'
        }
    })
    return res.data
  }
}
