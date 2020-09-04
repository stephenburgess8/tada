<template>
  <div class="todo-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            todo name
          </h1>
          <h2 class="subtitle ">
            todo date
          </h2>
        </div>
      </div>
    </section>
    <section class="todo-content">
      <div class="container">
        <p class="is-size-4 description">todo description</p>
        <p class="is-size-4">Location:</p>
        <p class="is-size-4">Category:</p>
        <div class="todo-images columns is-multiline has-text-centered">
          <div class="column is-one-third">
            IMAGE PLACEHOLDER
          </div>
        </div>
      </div>
    </section>
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
import TodoService from '@/services/TodoService.js';
export default {
  name: 'TodoSingle',
  data() {
    return {
      todo: {}
    }
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
    }
  }
}
</script>
