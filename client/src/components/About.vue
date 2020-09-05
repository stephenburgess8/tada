<template>
  <v-container>
    <template>
      <v-card width="100%">
        <v-container fluid>
          <img class="about-logo" alt="Tada Logo" src="../assets/logo.png">
          <h1 class="about-title">About Tada</h1>
          <v-row>
            <v-col md="8" sm="8" cols="12">
              <p>Do you need to get stuff done, and fast? Do you want a Todo list app that's simple, easy to use, and free? Leave the frills, the complications, and the price tags of those other Todo list apps behind and try Tada today! With Tada, your work gets done like magic.</p> <br>
              <p>Tada is a Todo List app prototype built on a modern JavaScript stack. The Tada List stack includes Vue, Vuetify, Material Design, Auth0, Node, Express, MongoDB, MongoDB Atlas, and Mongoose.</p>
            </v-col>

            <v-col
              class="text-center"
              cols="12"
              sm="4"
              md="4"
            >
              <v-row
                class="flex-column ma-0 fill-height"
              >
                 <v-container flex>
                  <v-btn x-large color="secondary" @click="login" >Try Tada Today</v-btn>

                  <v-btn x-large @click="login">Login</v-btn>
                </v-container>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </v-container>
</template>
<style>
.about-logo {
  vertical-align: middle;
  width: 80px;
 }
 .about-title {
  display: inline;
  vertical-align: middle;
 }
 .v-btn:not(.v-btn--round).v-size--x-large {
  margin-bottom: 16px;
  width: 95%;
 }
 .theme--light.v-btn:not(.v-btn--text):not(.v-btn--outlined).secondary {
  background-color: #37007B;
 }
</style>
<script>
export default {
  name: 'About',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
  }
}
</script>