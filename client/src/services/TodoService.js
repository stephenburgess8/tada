import axios from "axios"

export default {
  async getTodos(userId, token) {
    console.log(userId, token)
    let res = await axios.get("http://localhost:4050/api/todos", {
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'UserId': userId
        }
    });
    return res.data;
  },
  async getTodoSingle(userId, todoId, token) {
    let res = await axios.get("http://localhost:4050/api/todos/" + todoId,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'UserId': userId
        }
    });
    return res.data;
  },
  async newTodo(req, token) {
    let res = await axios.post("http://localhost:4050/api/todos/", req, {
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'UserId': req.email
        }
    });
    return res.data;
  }
}
