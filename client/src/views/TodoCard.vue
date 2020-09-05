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
    </v-container>
  </v-card>
</template>
<script>
  export default {
    props: ['todo'],
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