import React, { useState, useEffect } from "react";

const OptionsPage = () => {
  const [outlineColor, setOutlineColor] = useState("red");
  const [apiKey, setApiKey] = useState("");
  const [altTextType, setAltTextType] = useState("succinct");

  useEffect(() => {
    chrome.storage.sync.get(["outlineColor", "apiKey", "altTextType"], (result) => {
      if (result.outlineColor) {
        setOutlineColor(result.outlineColor);
      }
      if (result.apiKey) {
        setApiKey(result.apiKey);
      }
      if (result.altTextType) {
        setAltTextType(result.altTextType);
      }
    });
  }, []);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setOutlineColor(newColor);
    chrome.storage.sync.set({ outlineColor: newColor });
  };

  const handleApiKeyChange = (event) => {
    const newKey = event.target.value;
    setApiKey(newKey);
    chrome.storage.sync.set({ apiKey: newKey });
  };

  const handleAltTextTypeChange = (event) => {
    const newType = event.target.value;
    setAltTextType(newType);
    chrome.storage.sync.set({ altTextType: newType });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">AltTexter Options</h2>
      <label className="block my-2">Outline Color:</label>
      <input 
        type="color" 
        value={outlineColor} 
        onChange={handleColorChange} 
        className="border p-2 rounded"
      />
      <label className="block my-2">OpenAI API Key:</label>
      <input 
        type="text" 
        value={apiKey} 
        onChange={handleApiKeyChange} 
        className="border p-2 rounded w-full"
        placeholder="Enter your OpenAI API key"
      />
      <label className="block my-2">Alt Text Style:</label>
      <select 
        value={altTextType} 
        onChange={handleAltTextTypeChange} 
        className="border p-2 rounded w-full"
      >
        <option value="succinct">Succinct</option>
        <option value="full-length">Full-Length</option>
      </select>
    </div>
  );
};

export default OptionsPage;
