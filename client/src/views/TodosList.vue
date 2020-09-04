<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Todos List
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>


      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//  import TodoCard from "@/components/TodoCard"
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
    methods: {
      async getTodosData() {
        const token = await this.$auth.getTokenSilently()
        TodoService.getTodos(this.$auth.user.email, token )
        .then(
          (todos => {
            this.$set(this, "todos", todos)
          }).bind(this)
        )
      }
    }
  }
</script>
