"use strict";var precacheConfig=[["/company-template/index.html","7a8bb37791f57d3a89364864e5418f42"],["/company-template/static/css/main.f38d55d1.css","704babeca6d575cb85450dd503d76082"],["/company-template/static/js/main.dcb096d1.js","47038a9c27515a5044e967955ff1e043"],["/company-template/static/media/about-head.2de9849c.jpg","2de9849cace56abd44316bcc145caf11"],["/company-template/static/media/app-google.dffd25fb.svg","dffd25fb8394300c3b19e0f5b52ec27d"],["/company-template/static/media/app-ios.e374ae72.svg","e374ae720b14326ea930e037a7086df6"],["/company-template/static/media/contacts-head.9f9393dd.jpg","9f9393ddf9cbbc7c3ee5289571ab96e5"],["/company-template/static/media/landing.4e0c17ee.jpg","4e0c17ee52025e2da0c66475fc7236ae"],["/company-template/static/media/life-thumb.3f7aba24.jpg","3f7aba244e0e3ea2b41d0372588b308d"],["/company-template/static/media/logo.a851fd52.png","a851fd52dcb89bb88ab34fc9c9a20690"],["/company-template/static/media/services-head.e8634450.jpg","e8634450a08b92439177d89787ddf9fd"],["/company-template/static/media/style-thumb.7404fac4.jpg","7404fac43b9eb479ebce294da278cf84"],["/company-template/static/media/team1.36d1a749.jpg","36d1a74983b812c08fe535a50628b11c"],["/company-template/static/media/team2.3b1f7698.jpg","3b1f76982042983df63765a1a4ce45c8"],["/company-template/static/media/team3.a81307b7.jpg","a81307b72bf26ed3b3bf1e555e17084d"],["/company-template/static/media/travel-thumb.68be1b78.jpg","68be1b78bbf2beae8b985046d76415b1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/company-template/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});