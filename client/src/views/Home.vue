<template>
  <div class="home">
    <v-container>
      <v-row
        class="flex-column ma-0"
      >
        <About v-if="!$auth.isAuthenticated && !$auth.loading" />
        <v-col class="flex-grow-1">
          <TodosList v-if="$auth.isAuthenticated" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

  import About from '../components/About'
  import TodosList from './TodosList'
  export default {
    components: {
      About,
      TodosList
    },
    data () {
      return {
        items: [
          {
            title: 'Todos',
            icon: 'mdi-format-list-bulleted-type'
          },
          {
            title: 'Calendar',
            icon: 'mdi-calendar'
          },
        ],
      }
    },
  }
</script>

<style>
.v-card {
    width: 240px;
}
.v-icon {
  fill: currentColor
}
</style>