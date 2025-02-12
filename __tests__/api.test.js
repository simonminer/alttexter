import { fetchAltText } from "../src/utils/api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ choices: [{ message: { content: "Sample Alt Text" } }] }),
  })
);

test("fetchAltText returns AI-generated text", async () => {
  const altText = await fetchAltText("image-url", "test-api-key", "succinct");
  expect(altText).toBe("Sample Alt Text - AI-generated alt text");
});
