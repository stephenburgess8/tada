<template>
  <template>
  <v-form>
    <v-autocomplete
      v-model="selected"
      :items="['Trevor Handsen', 'Alex Nelson']"
      chips
      label="To"
      full-width
      hide-details
      hide-no-data
      hide-selected
      multiple
      single-line
    ></v-autocomplete>
    <v-divider></v-divider>
    <v-text-field
      label="Subject"
      value="Plans for the weekend"
      single-line
      full-width
      hide-details
    ></v-text-field>
    <v-divider></v-divider>
    <v-textarea
      v-model="title"
      label="Message"
      counter
      maxlength="120"
      full-width
      single-line
    ></v-textarea>
  </v-form>
</template>
</template>
<script>
  export default {
  }
</script>
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