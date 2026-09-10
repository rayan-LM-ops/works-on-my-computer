function pickRandom(items) {
return items[Math.floor(Math.random() * items.length)];
}

function setText(id, text) {
var element = document.getElementById(id);
if (element) element.textContent = text;
}

function showMessage(kind) {
var messages = window.WOMM_MESSAGES || {};
var list = messages[kind] || messages.excuses || [];
setText("message", pickRandom(list));
}

function loadStatus() {
var config = window.WOMM_CONFIG || {};

setText("environment", config.environment || "UNKNOWN");
setText("version", config.version || "0.0.0");
setText("confidence", config.developerConfidence || "Not measured");
setText("statusText", config.statusText || "Waiting for coffee.");
}

document.addEventListener("DOMContentLoaded", function () {
loadStatus();

document.getElementById("excuseButton").addEventListener("click", function () {
showMessage("excuses");
});

document.getElementById("solutionButton").addEventListener("click", function () {
showMessage("solutions");
});

document.getElementById("panicButton").addEventListener("click", function () {
showMessage("panic");
});

// Copy the generated message
var copyButton = document.getElementById("copyButton");

if (copyButton) {
copyButton.addEventListener("click", async function () {
var messageElement = document.getElementById("message");

  if (!messageElement) {
    return;
  }

  var textToCopy = messageElement.textContent.trim();

  if (!textToCopy) {
    return;
  }

  try {
    await navigator.clipboard.writeText(textToCopy);

    var originalText = copyButton.textContent;

    copyButton.textContent = "Copied!";

    setTimeout(function () {
      copyButton.textContent = originalText;
    }, 1500);

  } catch (error) {
    console.error("Unable to copy message:", error);

    copyButton.textContent = "Copy failed";

    setTimeout(function () {
      copyButton.textContent = "Copy Message";
    }, 1500);
  }
});

}
});