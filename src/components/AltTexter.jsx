import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { fetchAltText } from "../utils/api";
import { getStoredSettings } from "../utils/storage";
import Notification from "./Notification";

const AltTexter = () => {
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState("Alt-text generation is OFF");
  const [outlineColor, setOutlineColor] = useState("red");
  const [apiKey, setApiKey] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [altTextType, setAltTextType] = useState("succinct");

  useEffect(() => {
    getStoredSettings().then(({ outlineColor, apiKey, altTextType }) => {
      if (outlineColor) setOutlineColor(outlineColor);
      if (apiKey) setApiKey(apiKey);
      if (altTextType) setAltTextType(altTextType);
    });
  }, []);

  const toggleExtension = () => {
    setEnabled(!enabled);
    setStatus(enabled ? "Alt-text generation is OFF" : "Alt-text generation is ON");

    if (!enabled) {
      generateAltText();
    }
  };

  const generateAltText = async () => {
    let missingAltCount = 0;
    let generatedAltCount = 0;
    const images = document.querySelectorAll("img");
    missingAltCount = Array.from(images).filter(img => !img.alt || img.alt.trim() === "").length;

    for (let img of images) {
      if (!img.alt || img.alt.trim() === "") {
        try {
          const altText = await fetchAltText(img.src, apiKey, altTextType);
          img.alt = altText;
          img.style.outline = `2px solid ${outlineColor}`;
          generatedAltCount++;
        } catch (error) {
          setMessage("Error generating alt text for some images.");
          setMessageType("error");
          return;
        }
      }
    }
    setMessage(`Successfully generated alt text for ${generatedAltCount} images.`);
    setMessageType("success");
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">AltTexter</h2>
      <p className="my-2">{status}</p>
      <Notification message={message} type={messageType} />
      <Button onClick={toggleExtension}>{enabled ? "Disable" : "Enable"}</Button>
    </div>
  );
};

export default AltTexter;

