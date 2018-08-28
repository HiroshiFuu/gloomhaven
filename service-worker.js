"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/gloomhaven/index.html","266b85b378d3ad21e76e2bfcdad54515"],["/gloomhaven/static/css/main.69438416.css","452c2325eaf3de6f33988ab6ff58675c"],["/gloomhaven/static/js/main.b0fbc8ad.js","45d0d4b604201883595873fea9746fa4"],["/gloomhaven/static/media/+0.acd31880.jpg","acd3188063d9f017939953ddd4376ec1"],["/gloomhaven/static/media/+1.051d3400.jpg","051d3400627cf352e75253f19a523613"],["/gloomhaven/static/media/+2.48910310.jpg","48910310082bba2931ed3e6af0f133e8"],["/gloomhaven/static/media/-1.0927733c.jpg","0927733c16e17b813a6f760598c4ac6b"],["/gloomhaven/static/media/-2.2fa004d1.jpg","2fa004d1ec952b335de3fb1e8025e49e"],["/gloomhaven/static/media/2x.a78b18d1.jpg","a78b18d1a145438b1acc84999bf12cba"],["/gloomhaven/static/media/PirataOne-Regular.16b9908c.ttf","16b9908c5de2082885178c4f9341fd1e"],["/gloomhaven/static/media/SakkalMajalla.6e89ecfd.ttf","6e89ecfd2776a4697b964580e8924d0f"],["/gloomhaven/static/media/add_target.6a9b0572.svg","6a9b0572e4e4ed6c2c7a466a67c6a85f"],["/gloomhaven/static/media/air.fac591e3.svg","fac591e3c321b5669e75c36ffb603b83"],["/gloomhaven/static/media/any_element.34db005c.svg","34db005c43d0c6b86c12575e5ba9a87a"],["/gloomhaven/static/media/aoe-4-with-black.8b2be9d7.svg","8b2be9d77f1a25b7fa17938e96a264de"],["/gloomhaven/static/media/aoe-circle-with-middle-black.7be792df.svg","7be792dfe0914581a1c5e38a0eb281f6"],["/gloomhaven/static/media/aoe-circle-with-side-black.aeb051db.svg","aeb051dbf6c9a9db815f54ff6deacfe2"],["/gloomhaven/static/media/aoe-circle.0a6787b3.svg","0a6787b3efbf243435aa9129ae38b99c"],["/gloomhaven/static/media/aoe-line-3-with-black.b39ca936.svg","b39ca9367d23e4614e6a31e36b2698eb"],["/gloomhaven/static/media/aoe-line-4-with-black.502d737d.svg","502d737d8d0e6b91285a2a45a5e8669b"],["/gloomhaven/static/media/aoe-line-6-with-black.a7f1b116.svg","a7f1b116e1471b680a3e720af74ae9e4"],["/gloomhaven/static/media/aoe-triangle-2-with-black.ad30957e.svg","ad30957e31eb04dd5f065e16c48616b2"],["/gloomhaven/static/media/aoe-triangle-2.12278694.svg","122786948008380f24f614a177e6875f"],["/gloomhaven/static/media/aoe-triangle-3-with-corner-black.1f34cc03.svg","1f34cc0381ebe3862a95eabad88aae98"],["/gloomhaven/static/media/attack.a1598f5a.svg","a1598f5a051ca44ea571d8fd9a871d26"],["/gloomhaven/static/media/blank.f591d63e.png","f591d63eef94815ee5432acde5f4b26b"],["/gloomhaven/static/media/bless.59479e31.svg","59479e31da2a3d02fd161e16577062e2"],["/gloomhaven/static/media/bless.f7db781d.jpg","f7db781dc0e2c5f4053d70f3e6b1b84b"],["/gloomhaven/static/media/card.a1114c97.jpg","a1114c9750bc4567590f6fb519558e27"],["/gloomhaven/static/media/card_back.5873f272.jpg","5873f272dfddd3868e1733b0b25b4d90"],["/gloomhaven/static/media/curse.74c2e27d.jpg","74c2e27d945943fd2d83d9c64e6a78a3"],["/gloomhaven/static/media/curse.9664421c.svg","9664421ce60fbb8830f7a3b14d9c89c9"],["/gloomhaven/static/media/dark.39e1aa10.svg","39e1aa1049148ac27ce9c6ecb2540eab"],["/gloomhaven/static/media/deck_player_cover.8e6e164e.png","8e6e164e6c41baf074bf554c5b0d803f"],["/gloomhaven/static/media/disarm.079d79cd.svg","079d79cdabefd485672e127b9837bc03"],["/gloomhaven/static/media/earth.443bd9ff.svg","443bd9ff0c694e5fb81dfa3cd4ba8412"],["/gloomhaven/static/media/elderDrakeSpecial1Area.b81e97cb.svg","b81e97cb5285d668a64cb06f9cff9e9c"],["/gloomhaven/static/media/fire.673d53c2.svg","673d53c2f4d6db43f507fca97ffebc8f"],["/gloomhaven/static/media/flying.db12f0c3.svg","db12f0c32a98712bdb3ff4d8d65b4077"],["/gloomhaven/static/media/heal.c963fe2e.svg","c963fe2e42f0f23a914676eccb042910"],["/gloomhaven/static/media/health.c963fe2e.svg","c963fe2e42f0f23a914676eccb042910"],["/gloomhaven/static/media/ice.06520bc7.svg","06520bc71c0f1447abee20675c5b6af9"],["/gloomhaven/static/media/immobilize.d10777f5.svg","d10777f5e7f4456f28f0e6c6bb36df02"],["/gloomhaven/static/media/inoxBodyguardSpecial1Area.7c623f77.svg","7c623f77764724aede7acac33c0a7e2d"],["/gloomhaven/static/media/invisible.94f6aac1.svg","94f6aac18f7e3a0f01143a0e60b7eaf0"],["/gloomhaven/static/media/jump.abeff9fb.svg","abeff9fb25c3cc31026e849ab6153446"],["/gloomhaven/static/media/light.ef434304.svg","ef434304ecebfa6de270789229b728e6"],["/gloomhaven/static/media/loot.2991b569.svg","2991b569085c7a04d27309de2357d6f9"],["/gloomhaven/static/media/minusOneItemIcon.48e26d68.svg","48e26d6848d2b80bc05cde420b237dc9"],["/gloomhaven/static/media/monster_card_back.1c2fbc78.jpg","1c2fbc7815e9941206a287bf60009c53"],["/gloomhaven/static/media/move.4bfeefc7.svg","4bfeefc7a62e1082b4e2171f3403ad09"],["/gloomhaven/static/media/movement.4bfeefc7.svg","4bfeefc7a62e1082b4e2171f3403ad09"],["/gloomhaven/static/media/muddle.96983af1.svg","96983af10205de5c42c3b92205807def"],["/gloomhaven/static/media/null.5a9fe71c.jpg","5a9fe71c03bf890d4ad97617745aa14d"],["/gloomhaven/static/media/pierce.588df0b3.svg","588df0b34e5bbcf0205a28a1d1161201"],["/gloomhaven/static/media/poison.7d7f60b4.svg","7d7f60b482afb14e571cb82d482d1916"],["/gloomhaven/static/media/pull.6149737b.svg","6149737b3b2d0785ea7f99675c2d2792"],["/gloomhaven/static/media/push.c3799cf8.svg","c3799cf8b3745f56456bce69fd6faa1c"],["/gloomhaven/static/media/range.1ade028b.svg","1ade028be23c8667098ed4261735916b"],["/gloomhaven/static/media/refresh_item.81a225e8.svg","81a225e8546321b157729df52b4c7eeb"],["/gloomhaven/static/media/retaliate.170dbe3a.svg","170dbe3a0f7d555e6887ef99cc8ee3d4"],["/gloomhaven/static/media/rolling.8aa12f68.svg","8aa12f689c3f4a79332f710b2b06e239"],["/gloomhaven/static/media/shield.bb5c34b1.svg","bb5c34b133a4a5a62b39b55eb1650588"],["/gloomhaven/static/media/shuffle.45f1850f.svg","45f1850feb5d65d64201fd318cd055e0"],["/gloomhaven/static/media/sightlessEyeSpecial1Area.24f4acca.svg","24f4accafc8a65cdda6d585695c933ec"],["/gloomhaven/static/media/sightlessEyeSpecial2Area.c723bd57.svg","c723bd57ce507e2d0f9fd88656203a1e"],["/gloomhaven/static/media/strengthen.8acb9b8e.svg","8acb9b8ecef3675500bb1d25e2ceebb4"],["/gloomhaven/static/media/stun.b82f281d.svg","b82f281dd42c84601e47c559788f2d9f"],["/gloomhaven/static/media/summonBackground.d9ae2336.png","d9ae23364ad5c19a18579f9883a129a7"],["/gloomhaven/static/media/target.91304f4e.svg","91304f4e92f3848840ab54fceab09374"],["/gloomhaven/static/media/use_element.eb11cf13.svg","eb11cf13cbae0be5be82a5f854f27d0c"],["/gloomhaven/static/media/wound.52753d3c.svg","52753d3cfb0d514dcd181636928d2d30"],["/gloomhaven/static/media/xp.127c4074.svg","127c4074335571dd741f712654c54d82"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var i="/gloomhaven/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(i,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});