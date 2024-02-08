
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.6f067ca8c179a701fefc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/708.latest.en.20995281facd213117db.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/835.latest.en.e6f8d348b6743a1db733.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.latest.en.6e9d2d00127d082bd6cf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5c54bbc4c0b14d8e112a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.latest.en.d48b54ea867b809eedba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.latest.en.868a7a3d9da31ab59343.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/44.latest.en.ed5da7e5a1dddfca0e79.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.931860c621857a5ded31.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/708.latest.en.800164302d4c7459140d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e5a7f63ca146c0549466.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.latest.en.4d273af8acf76b1eb555.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/457.latest.en.1ad809edb4f0b887b41f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  