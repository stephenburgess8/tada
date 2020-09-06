<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img class="logo" alt="Tada Logo" src="./assets/logo.png"></router-link>
      <router-link to="/"><h2 class="site-title">Tada</h2></router-link>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- Check that the SDK client is not currently loading before accessing is methods -->
            <div>
              <!-- show login when not authenticated -->
              <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Sign in / Register</strong></a>
              <!-- show logout when authenticated -->
              <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  float: left;
  max-width: 56px;
  margin-top: -8px;
}

.buttons { text-align: right;}
.button {
  cursor: pointer;
}

#nav {
  background-color: #efefef;
  padding: 30px;
}

.site-title {
  float: left;
  display: inline-block;
  vertical-align: middle;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
