function openPage(details) {
  const targetUrl = "https://hope.fun.ac.jp/my/courses.php";
  const newPageUrl = "https://hope.fun.ac.jp/my/";

  if (details.url === targetUrl) {
    console.log("Redirecting to: ", newPageUrl);
    
    // タブのURLを更新
    browser.tabs.update(details.tabId, { url: newPageUrl });

    // リクエストをキャンセル
    return { cancel: true };
  }
  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  openPage,
  { urls: ["<all_urls>"] },
  ["blocking"]
);

