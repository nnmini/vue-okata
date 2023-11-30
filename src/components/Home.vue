

<template>
  
  <div id="home">
 
    <h1 class="ui header">PKCE Flow w/ Okta Hosted Login Page</h1>
    <div v-if="!authState?.isAuthenticated">
     
      <button
          id="login-button"
          class="ui primary button"
          role="button"
          v-on:click="login()"
      >
        Login
      </button>
    </div>

    <div v-if="authState?.isAuthenticated">
      <p>Welcome back, {{claims && claims.name}}!</p>
    

      
      
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      claims: '',
      resourceServerExamples: [
        {
          label: 'Node/Express Resource Server Example',
          url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server'
        },
        {
          label: 'Java/Spring MVC Resource Server Example',
          url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server'
        },
        {
          label: 'ASP.NET Core Web API Resource Server Example',
          url: 'https://github.com/okta/samples-aspnetcore/tree/master/samples-aspnetcore-2x/resource-server'
        }
      ]
    }
  },
  created () { this.setup() },
  methods: {
    async setup () {
      if (this.authState?.isAuthenticated) {
        this.claims = await this.$auth.getUser()
      }
    },
    login () {
      this.$auth.signInWithRedirect({ originalUri: '/' })
    }
  }
}
</script>
