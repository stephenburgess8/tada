<template>
  <v-row class="text-center">
    <v-col class="flex-shrink-1" cols="3">
      <Dashboard v-if="$auth.isAuthenticated" />
    </v-col>
    <v-col class="flex-grow-1">
      <v-container flex>
        <v-layout row>
          <div v-if="!todos.length" class="text-center">
          <v-btn class="tada-link"
              to="/todo/add">Add your first Todo
          </v-btn>
          </div>
          <v-col cols="auto"
            v-for="todo in todos" 
            :todo="todo"
            :key="todo.id"
            class="column" >
            <router-link class="tada-link"
              :to="'/todo/' + todo._id" >
              <TodoCard :todo="todo" />
            </router-link>
          </v-col>
        </v-layout>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
  import Dashboard from '../components/Dashboard'
  import TodoCard from "./TodoCard"
  import TodoService from '@/services/TodoService.js'
  export default {
    name: 'TodosList',
    data() {
      return {
          todo: {},
          todos: []
      }
    },
    created() {
      this.getTodosData()
    },
    components: {
      Dashboard,
      TodoCard
    },
    methods: {
      async getTodosData() {
        const token = await this.$auth.getTokenSilently()
        TodoService.getTodos(this.$auth.user.email, token )
        .then(
          (todos => {
            console.log(todos)
            this.$set(this, "todos", todos)
          }).bind(this)
        )
      }
    }
  }
</script>
<style>
.tada-link {
  text-decoration: none;
}
.home .row .row .flex-grow-1 .container.flex {
  padding-top: 0;
}

.home .row .row .flex-grow-1 .container .column.col {
  padding-top: 0;
}
</style>
