window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'F9TTK78VeQhuEJXql9EL3LhT7QgLqDDx',
    redirectUri: 'https://comic-deadly-bluegill.ngrok-free.app',
    logoutRedirectUri: 'https://comic-deadly-bluegill.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

