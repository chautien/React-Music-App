const axios = require('axios');
const instance = axios.create({
  url: 'https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST',
  baseURL:
    'https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST',
  headers: { 'X-Custom-Header': 'foobar' },
});
instance.get().then((data) => console.log(data));
