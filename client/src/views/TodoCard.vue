<template>
  <v-card class=" mx-auto">
    <v-container>
      <v-row justify="space-between">
        <h3 class="is-size-4 has-text-weight-bold">{{todo.title}}</h3>
        <br>
        <v-col cols="auto">
          
          <small class="todo-date">{{todo.date}}</small><br>
          <small class="todo-date">{{todo.time}}</small>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <p>{{ todo.details }}</p>
        </v-col>
      </v-row>
      <v-row><v-btn class="mr-4" @click="complete">Mark Done</v-btn>
                      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  import TodoService from '@/services/TodoService.js'

  export default {
    props: ['todo'],
    methods: {
      async complete(e) {
        e.preventDefault();

        const token = await this.$auth.getTokenSilently();
        TodoService.markTodoDone(this.$auth.user.email, this.$props.todo._id, token)
      }
    }
  }
</script>
<style scoped>
  h3 {
    margin-left: 8px;
    margin-top: 8px;
    text-decoration: none;
    width: 100%;
  }
  small, p {
    text-decoration: none;
  }
</style>