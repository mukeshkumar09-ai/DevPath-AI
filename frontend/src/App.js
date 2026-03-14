import React, { useState } from "react";

function App() {

  const [idea, setIdea] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {

    setLoading(true);

    const response = await fetch("http://localhost:5000/api/create-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ idea })
    });

    const data = await response.json();

    setRoadmap(data.roadmap);
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "Arial" }}>

      <h1>🚀 DevPath AI</h1>

      <p>Generate a project roadmap instantly</p>

      <input
        type="text"
        placeholder="Enter your project idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        style={{ padding: "10px", width: "350px" }}
      />

      <br /><br />

      <button onClick={generateRoadmap} style={{ padding: "10px 20px" }}>
        Generate Roadmap
      </button>

      {loading && <p>Generating roadmap...</p>}

      <div style={{ marginTop: "30px" }}>
        {roadmap.map((step, index) => (
          <p key={index}>✅ {step}</p>
        ))}
      </div>

    </div>
  );
}

export default App;