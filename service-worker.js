"use strict";var precacheConfig=[["/gloomhaven/index.html","2c977df3703dae62ff37722235f98101"],["/gloomhaven/static/css/main.99c14328.css","a83e7d1390b87c947c5b5c4cf76b965a"],["/gloomhaven/static/js/main.28ca5e73.js","efbcfda71114cad155ed2dbf52287496"],["/gloomhaven/static/media/PirataOne-Regular.16b9908c.ttf","16b9908c5de2082885178c4f9341fd1e"],["/gloomhaven/static/media/SakkalMajalla.6e89ecfd.ttf","6e89ecfd2776a4697b964580e8924d0f"],["/gloomhaven/static/media/add_target.82b3eabf.svg","82b3eabf8ec3ceacecddd658f512f027"],["/gloomhaven/static/media/air.b71a1e90.svg","b71a1e902aea2b375eca97f4d6e83f3e"],["/gloomhaven/static/media/any_element.3687221d.svg","3687221dc75acf4fc32af645547ab8b3"],["/gloomhaven/static/media/aoe-4-with-black.66d11fbc.svg","66d11fbc3e7dc0d1343dc72ac5f7c4c0"],["/gloomhaven/static/media/aoe-circle-with-middle-black.41cc1fc8.svg","41cc1fc887cd61ce7d31e0298a3327c1"],["/gloomhaven/static/media/aoe-circle-with-side-black.57e14188.svg","57e14188d07388ad5a8f8261ba5e4983"],["/gloomhaven/static/media/aoe-circle.80bf6532.svg","80bf65329b371553c8e4f58a2bdf981f"],["/gloomhaven/static/media/aoe-line-3-with-black.3bf93453.svg","3bf93453ad9827b42a2c86c6ca26e62b"],["/gloomhaven/static/media/aoe-line-4-with-black.336025e6.svg","336025e6a6955a3bd92c3e3e5716c0e0"],["/gloomhaven/static/media/aoe-line-6-with-black.1cba71ae.svg","1cba71ae42bef23a43828c8d08564ff2"],["/gloomhaven/static/media/aoe-triangle-2-with-black.ada60566.svg","ada605665b3ecde019e3dce2738de91a"],["/gloomhaven/static/media/aoe-triangle-2.ee68e6ed.svg","ee68e6ed90d00d9cf2a5ea095744d3a5"],["/gloomhaven/static/media/aoe-triangle-3-with-corner-black.46c07040.svg","46c070403c4d4d5832f9051fe76d3552"],["/gloomhaven/static/media/attack.79852f29.svg","79852f29c26b8a85b187b429f8499134"],["/gloomhaven/static/media/bless.c9e17e32.svg","c9e17e3217a92457ac31b0df73d59596"],["/gloomhaven/static/media/card.a1114c97.jpg","a1114c9750bc4567590f6fb519558e27"],["/gloomhaven/static/media/curse.5fbb8b2f.svg","5fbb8b2fd662b38767b28faa46cde29f"],["/gloomhaven/static/media/damage-1.3e3acaf7.png","3e3acaf7177dd69a03effa889d8f3673"],["/gloomhaven/static/media/damage-5.aa5ebddb.png","aa5ebddb2510e4d1538679b6f6e552b5"],["/gloomhaven/static/media/dark.89ef21f6.svg","89ef21f635af95117dd7d503d7729b9a"],["/gloomhaven/static/media/disarm.14c767e8.svg","14c767e8d72c53400bbf46cba1271404"],["/gloomhaven/static/media/earth.11e7c60d.svg","11e7c60d5f469c125f3feeca3fc24bbf"],["/gloomhaven/static/media/elderDrakeSpecial1Area.eb3b491a.svg","eb3b491add6900b57ea727883334b2ef"],["/gloomhaven/static/media/fire.d45dc737.svg","d45dc73746cde89950d870228d81b9b1"],["/gloomhaven/static/media/flying.643cca37.svg","643cca37132455f7c97e4ba30fdb8640"],["/gloomhaven/static/media/heal.7e43977c.svg","7e43977c1284758971218a55743d2dfd"],["/gloomhaven/static/media/health.7e43977c.svg","7e43977c1284758971218a55743d2dfd"],["/gloomhaven/static/media/ice.a5af5486.svg","a5af5486b49d068148a1b81acdb47f31"],["/gloomhaven/static/media/immobilize.06a7bf04.svg","06a7bf04bb124c8de796cd542e44e12b"],["/gloomhaven/static/media/inoxBodyguardSpecial1Area.42a2a477.svg","42a2a4770330d830200dd170f733954e"],["/gloomhaven/static/media/invisible.6aaa5c90.svg","6aaa5c9057893509e7b90c00a2fff232"],["/gloomhaven/static/media/jump.df5dd13a.svg","df5dd13a0b2fc7e6a34c111efb45bb22"],["/gloomhaven/static/media/light.fea53de9.svg","fea53de9242848cf2e6656180c791f67"],["/gloomhaven/static/media/loot.bddb0267.svg","bddb0267b0a0487ef495078729e4f4a1"],["/gloomhaven/static/media/monster_card_back.1c2fbc78.jpg","1c2fbc7815e9941206a287bf60009c53"],["/gloomhaven/static/media/move.bea37385.svg","bea373854dbb0d447dff7df9a6794481"],["/gloomhaven/static/media/movement.bea37385.svg","bea373854dbb0d447dff7df9a6794481"],["/gloomhaven/static/media/muddle.0265827a.svg","0265827a50fafb557e1ad354e83fefe6"],["/gloomhaven/static/media/pierce.904bbb03.svg","904bbb03449e8eceb78973afebacceeb"],["/gloomhaven/static/media/poison.57e3c705.svg","57e3c705b9b62aa7277349460bf64382"],["/gloomhaven/static/media/pull.ed1cbec6.svg","ed1cbec696f311893388c07918fbfc4b"],["/gloomhaven/static/media/push.6109e085.svg","6109e085db1ee5fbea2b6f701af7d1a6"],["/gloomhaven/static/media/range.786732e0.svg","786732e09788deab70c8c721d2216a8b"],["/gloomhaven/static/media/refresh_item.0b457b37.svg","0b457b37ae5b580993463e99dc9c4076"],["/gloomhaven/static/media/retaliate.e0cc69e5.svg","e0cc69e50f55ffcadfe026bf87d5dede"],["/gloomhaven/static/media/rolling.09ae61fc.svg","09ae61fcbf4ac3f5cb04bd946ef40c70"],["/gloomhaven/static/media/shield.859b3baa.svg","859b3baa5d7744fb0566159449d83fe9"],["/gloomhaven/static/media/shuffle.02b9993d.svg","02b9993d3a54cf4ae58638d4b38f7405"],["/gloomhaven/static/media/sightlessEyeSpecial1Area.83d99185.svg","83d99185291ef4b5b6e4172b5535feb2"],["/gloomhaven/static/media/sightlessEyeSpecial2Area.b39dba33.svg","b39dba3343cb75ed41109e7cdc6f0329"],["/gloomhaven/static/media/strengthen.ee72246f.svg","ee72246fef0374f6325ef171f46a7111"],["/gloomhaven/static/media/stun.9dfae759.svg","9dfae759e57ef44c53ef34cf20000bfd"],["/gloomhaven/static/media/target.cb5d81e7.svg","cb5d81e73c0320f18aad75887afec442"],["/gloomhaven/static/media/use_element.ed829f9b.svg","ed829f9b7844218b583088538c59ba87"],["/gloomhaven/static/media/wound.b07b0aea.svg","b07b0aea854e1d6214e217a3af81a99c"],["/gloomhaven/static/media/xp.518b8fcd.svg","518b8fcddf99950c2eb82903b7ce65b1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/gloomhaven/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});