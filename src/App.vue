
<template>
  <div id="app">
    <div class="ui inverted top fixed menu">
      <div class="ui container">
        <router-link
            to="/"
            class="header item"
        >
          <img
              class="ui mini image"
              src="./assets/logo.png"
          >
          &nbsp;
          Okta-Vue Sample Project
        </router-link>
        <a
            class="item"
            v-if="!authState?.isAuthenticated"
            v-on:click="login()"
        >
          Login
        </a>
        <router-link
            to="/messages"
            class="item"
            id="messages-button"
            v-if="authState?.isAuthenticated"
        >
          <i
              aria-hidden="true"
              class="mail outline icon">
          </i>
          Messages
        </router-link>
        <router-link
            to="/profile"
            class="item"
            id="profile-button"
            v-if="authState?.isAuthenticated"
        >
          Profile
        </router-link>

        <router-link
            to="/table"
            class="item"
            id="profile-button"
            v-if="authState?.isAuthenticated"
        >
          Ag Grid
        </router-link>
        <a
            id="logout-button"
            class="item"
            v-if="authState?.isAuthenticated"
            v-on:click="logout()"
        >
          Logout
        </a>
      </div>
    </div>
    <div
        class="ui text container"
        style="margin-top: 7em;"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    login () {
      this.$auth.signInWithRedirect({ originalUri: '/' })
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>
