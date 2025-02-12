import { getStoredSettings, saveSetting } from "../src/utils/storage";

beforeEach(() => {
  global.chrome = {
    storage: {
      sync: {
        get: jest.fn((keys, callback) => callback({ outlineColor: "blue", apiKey: "test-key", altTextType: "full-length" })),
        set: jest.fn(),
      },
    },
  };
});

test("getStoredSettings retrieves stored settings", async () => {
  const settings = await getStoredSettings();
  expect(settings.outlineColor).toBe("blue");
  expect(settings.apiKey).toBe("test-key");
  expect(settings.altTextType).toBe("full-length");
});

test("saveSetting stores a new value", () => {
  saveSetting("outlineColor", "green");
  expect(global.chrome.storage.sync.set).toHaveBeenCalledWith({ outlineColor: "green" });
});

