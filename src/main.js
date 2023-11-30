import { createApp } from 'vue';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaVue from '@okta/okta-vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify'; // Import createVuetify instead of Vuetify
import 'vuetify/dist/vuetify.min.css';
import 'semantic-ui-css/semantic.min.css';
import sampleConfig from '@/config';
import './main'

// Vuetify
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
const oktaAuth = new OktaAuth(sampleConfig.oidc);



createApp(App)
  .use(router)
  .use(OktaVue, { oktaAuth })
  .use(vuetify) // Pass vuetify directly
  .mount('#app');
