import { useState } from "react";

function PhishingScanner() {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const scanUrl = async () => {

    const response = await fetch(`http://127.0.0.1:8000/detect-phishing/?url=${url}`);
    const data = await response.json();

    setResult(data);
  };

  return (
    <div style={{padding:"40px"}}>

      <h2>Phishing URL Detector</h2>

      <input
        type="text"
        placeholder="Enter Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br/><br/>

      <button onClick={scanUrl}>Scan URL</button>

      {result && (
        <div>
          <h3>Result:</h3>
          <p>Status: {result.status}</p>
          <p>Confidence: {result.confidence}</p>
        </div>
      )}

    </div>
  );
}

export default PhishingScanner;