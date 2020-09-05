<template>
  <div class="home">
    <v-container>
      <v-row class="flex-column ma-0">

        <v-col class="flex-grow-1">
          <v-row class="text-center">
          <v-col class="flex-shrink-1" cols="3">
            <Dashboard v-if="$auth.isAuthenticated" />
          </v-col>
          <v-col class="flex-grow-1">
            <v-container flex>
              <v-layout row>
              <div class="todo-single">
                <section class="is-primary">
                  <div class="hero-body">
                    <div class="container">
                      <h1 class="title">
                        Title: {{todo.title}}
                      </h1>
                      <div>
                      <p class="subtitle ">
                        Date: {{todo.date}}
                      </p>
                      <p>Time: {{todo.time}}</p>
                      </div>
                      <p class="is-size-4 description">Details: {{todo.details}}</p>

                      <div>
                      <v-btn class="mr-4" @click="complete">Mark {{todo.title}} as Done</v-btn>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              </v-layout>
            </v-container>
          </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>
<style scoped>
  .todo-single {
    margin-top: 30px;
  }
  .hero {
    margin-bottom: 70px;
  }
  .todo-images {
    margin-top: 50px;
  }
  .description {
    margin-bottom: 30px;
  }
</style>


<script>
  import Dashboard from '../components/Dashboard'
  import TodoService from '@/services/TodoService.js';
  export default {
    name: 'TodoSingle',
    data() {
      return {
        todo: {}
      }
    },
    components: {
      Dashboard
    },
    created() {
      this.getTodoData(); 
    },
    // NEW
    methods: {
      async getTodoData() {
        const token = await this.$auth.getTokenSilently()
        TodoService.getTodoSingle(this.$auth.user.email, this.$route.params.id, token)
        .then(
          (todo => {
            this.$set(this, "todo", todo);
          }).bind(this)
        );
      },
      async complete(e) {
        e.preventDefault();

        const token = await this.$auth.getTokenSilently();
        TodoService.markTodoDone(this.$auth.user.email, this.$route.params.id, token)
      }
    }
  }
</script>
