window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'Qa3ljM2L3OuezNEQ6GRbk5tBlQWod3hF',
    redirectUri: 'https://comic-deadly-bluegill.ngrok-free.app',
    logoutRedirectUri: 'https://comic-deadly-bluegill.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

