export const getStoredSettings = () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(["outlineColor", "apiKey", "altTextType"], (result) => {
      resolve({
        outlineColor: result.outlineColor || "red",
        apiKey: result.apiKey || "",
        altTextType: result.altTextType || "succinct"
      });
    });
  });
};

export const saveSetting = (key, value) => {
  chrome.storage.sync.set({ [key]: value });
};

