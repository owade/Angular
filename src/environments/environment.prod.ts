export const environment = {
  production: true,
  auth: {
    clientID: 'W9D8e3Y8SQ2BbqAITVJ9EP6vk789DGuX',
    domain: 's3579452.auth0.com', // e.g., you.auth0.com
    audience: 'https://kmby16zi47.execute-api.eu-central-1.amazonaws.com/production', // e.g., http://localhost:4200
    redirect: 'https://kmby16zi47.execute-api.eu-central-1.amazonaws.com/production/callback',
    scope: 'openid profile email'
  }
};
