/*!
* Copyright (c) 2018-Present, Okta, Inc. and/or its affiliates. All rights reserved.
* The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
*
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*
* See the License for the specific language governing permissions and limitations under the License.
*/

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
