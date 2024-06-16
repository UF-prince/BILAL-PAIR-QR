const koyeb = require('koyeb-js');
const apiToken = 'YOUR_KOYEB_API_TOKEN';
const appId = 'YOUR_KOYEB_APP_ID';
const deploymentId = 'YOUR_KOYEB_DEPLOYMENT_ID';

koyeb.authenticate(apiToken);

koyeb.deployApp(appId, {
  files: {
    'index.js': fs.readFileSync('index.js', 'utf8'),
  },
});
