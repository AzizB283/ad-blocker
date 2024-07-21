document.getElementById("toggle").addEventListener("click", function () {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    const ruleIds = rules.map((rule) => rule.id);
    if (ruleIds.length) {
      chrome.declarativeNetRequest.updateDynamicRules(
        {
          removeRuleIds: ruleIds
        },
        () => {
          document.getElementById("status").textContent =
            "Ad blocking disabled.";
        }
      );
    } else {
      chrome.declarativeNetRequest.updateDynamicRules(
        {
          addRules: [
            {
              id: 1,
              priority: 1,
              action: { type: "block" },
              condition: {
                urlFilter: "||doubleclick.net^",
                resourceTypes: ["script", "image", "stylesheet"]
              }
            },
            {
              id: 2,
              priority: 1,
              action: { type: "block" },
              condition: {
                urlFilter: "||googlesyndication.com^",
                resourceTypes: ["script", "image", "stylesheet"]
              }
            }
          ]
        },
        () => {
          document.getElementById("status").textContent = "Blocking ads...";
        }
      );
    }
  });
});

// Initialize popup status
chrome.declarativeNetRequest.getDynamicRules((rules) => {
  document.getElementById("status").textContent = rules.length
    ? "Blocking ads..."
    : "Ad blocking disabled.";
});
