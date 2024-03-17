chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.includes("instagram.com")) {
      alert("Redirecting...")
      return { redirectUrl: "https://twitter.com" };
    }
  },
  { urls: ["*://*.instagram.com/*"] },
  ["blocking"]
);
