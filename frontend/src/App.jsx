import { useState } from "react";
import EditorBlock from "./components/EditorBlock";
import ResultDisplay from "./components/ResultDisplay";
import { containsCORS } from "./utils/corsCheck";
import "./App.css"; // Add this line to include styles

const defaultReactCode = `fetch("https://api-url.com/api/hello")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`;

const defaultFlaskCode = `from flask import Flask, jsonify
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

@app.route('/api/hello')
def hello():
    return jsonify({"message": "Hello from Flask!"})`;

function App() {
  const [reactCode, setReactCode] = useState(defaultReactCode);
  const [flaskCode, setFlaskCode] = useState(defaultFlaskCode);
  const [result, setResult] = useState(null);

  const handleRun = async () => {
    const corsEnabled = containsCORS(flaskCode);
    const url = corsEnabled
      ? import.meta.env.VITE_API_CORS_ENABLED
      : import.meta.env.VITE_API_CORS_DISABLED

       console.log("CORS API URL:", import.meta.env.VITE_API_CORS_ENABLED);
       console.log("CORS API URL:", import.meta.env.VITE_API_CORS_DISABLED);


    try {
      const res = await fetch(url);
      const data = await res.json();
      setResult({ success: true, data });
    } catch (err) {
      setResult({
        success: false,
        error: err.message === "Failed to fetch"
          ? "CORS Error: Backend blocked by browser"
          : err.message
      });
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">🛠️ CORS Simulator</h1>

      <div className="editor-section">
        <EditorBlock
          language="javascript"
          title="Frontend (React Code)"
          code={reactCode}
          onChange={(val) => setReactCode(val)}
        />
        <EditorBlock
          language="python"
          title="Backend (Flask Code)"
          code={flaskCode}
          onChange={(val) => setFlaskCode(val)}
        />
      </div>

      <button className="run-button" onClick={handleRun}>▶ Run</button>

      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
