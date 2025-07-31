function isInAppBrowser() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const uaLower = ua.toLowerCase();

  return (
    uaLower.includes("instagram") ||
    uaLower.includes("telegram") ||
    (uaLower.includes("line") && uaLower.includes("android")) ||
    uaLower.includes("snapchat") ||
    uaLower.includes("tiktok") ||
    (uaLower.includes("fbav") && uaLower.includes("mobile"))
  );
}

function openInBrowser() {
  const url = window.location.href;
  window.location.href = url.replace(/^https?:/, "intent:") + "#Intent;scheme=https;package=com.android.chrome;end";
}

window.onload = function () {
  if (isInAppBrowser()) {
    document.querySelector(".container").style.display = "none";
    document.getElementById("fallback").style.display = "block";
  }
};
