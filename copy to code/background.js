chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.includes("chat.openai.com")) {
      alert("Redirecting...");
      return { redirectUrl: "https://www.google.com/" };
    } else if (details.url.includes("gemini.google.com")) {
      alert("Redirecting...");
      return { redirectUrl: "https://www.google.com/" };
    } else if (details.url.includes("claude.ai")) {
      alert("Redirecting...");
      return { redirectUrl: "https://www.google.com/" };
    } else if (details.url.includes("perplexity.ai")) {
      alert("Redirecting...");
      return { redirectUrl: "https://www.google.com/" };
    }
  },
  {
    urls: [
      "*://*.chat.openai.com/*",
      "*://*.gemini.google.com/app*",
      "*://*.claude.ai/chats*",
      "*://*.www.perplexity.ai/*",
    ],
  },
  ["blocking"]
);
