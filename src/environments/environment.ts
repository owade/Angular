// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'W9D8e3Y8SQ2BbqAITVJ9EP6vk789DGuX',
    domain: 's3579452.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:4200', // e.g., http://localhost:4200
    redirect: 'http://localhost:4200/callback', // e.g http://localhost:4200/callback
    scope: 'openid profile email'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// 'https://hcbitp56jg.execute-api.eu-central-1.amazonaws.com/production/callback'
