import AV from 'leancloud-storage';

const APP_ID = 'k58h4jiihwDiEPflgudmW0hn-gzGzoHsz';
const APP_KEY = 'Bx9RfPsybeB6jiOUfe2JJVS9';
const SERVER_URLS = 'https://k58h4jii.lc-cn-n1-shared.com';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    serverURLs: SERVER_URLS
});