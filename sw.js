const staticCacheName = "trippyadiveCache";
const assets = [
  "/",
  "/index.html",
  "/about.html",
  "/baogu.html",
  "/jiaoma.html",
  "/djls.html",
];

self.addEventListener('install', function (event) {

    /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
    event.waitUntil(
        /* 创建一个名叫V1的缓存版本 */
        caches.open('v1').then(function (cache) {
            /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
            return cache.addAll([
                'index.html'
            ]);
        })
    );
});
//fetch event
self.addEventListener("fetch", (evt) => {
});



self.addEventListener("beforeinstallprompt", function(event) { // 监听到可安装事件，进行触发提醒用户
  setTimeout(function() {
    event.prompt()
    event.userChoice //判断用户是否安装
      .then(function(e) {
        install = true
      })
  }, 2000)
}, {
  once: true
})
