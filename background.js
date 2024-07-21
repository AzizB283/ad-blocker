chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: ["*://*.doubleclick.net/*", "*://*.googlesyndication.com/*"] },
  ["blocking"]
);
