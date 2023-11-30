

export default {
  oidc: {
    issuer: 'https://dev-14034212.okta.com/oauth2/default',
    clientId: '0oabhth3bncajHX4V5d7',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
  }
}
