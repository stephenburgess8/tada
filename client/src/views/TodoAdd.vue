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
      <v-form v-if="$auth.isAuthenticated" class="full-width" method="post" action="http://127.0.0.1:3000/todos"> 
        <v-text-field
          label="Title"
          full-width
          class="pt-0"
          name="title"
          v-model="todo.title"
        ></v-text-field>
        <v-date-picker
          v-model="todo.date"
          reactive
          full-width
          show-current
          year-icon="mdi-calendar-blank"
          prev-icon="mdi-skip-previous"
          next-icon="mdi-skip-next"
          name="date"
        ></v-date-picker>
        <v-time-picker
          title-color="accent"
          landscape
          full-width
          name="time"
          v-model="todo.time"
        ></v-time-picker>
        <v-textarea
          label="Details"
          counter
          maxlength="120"
          full-width
          single-line
          name="details"
          v-model="todo.details"
        ></v-textarea>
        <v-btn class="mr-4" @click="submit">Add Todo</v-btn>
      </v-form>
      </v-layout>
      </v-container>
    </v-col>
  </v-row>
          </v-col>
      </v-row>

    </v-container>
  </div>
</template>
<script>
  import Dashboard from '../components/Dashboard'
  import TodoService from '../services/TodoService'
  export default {
    data() {
      return {
        picker: new Date().toISOString().substr(0, 10),
        todo: {
          title: '',
          date: '',
          time: '',
          details: ''
        }
      }
    },
    components: {
      Dashboard
    },
    methods: {
      async submit(e) {
        e.preventDefault();

        const token = await this.$auth.getTokenSilently();

        TodoService.newTodo({
            ...this.todo,
            email: this.$auth.user.email
          }, token)
        .then(
          (res => {
            console.log(res)
          }).bind(this)
        )
      }
    }
  }
</script>
<style >

.v-picker__title.primary,
.v-picker--time.theme--light {
  background-color: #37007B;
}
.full-width,
.v-picker--full-width{
  width: 100%;
}
.v-text-field {
  margin-top: -16px;
  padding-top: 0;
}
.v-text-field.v-textarea {
  margin-top: 8px;
}
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
  .v-date-picker-table .v-btn.v-btn--active {
  color: black;
  }
</style>