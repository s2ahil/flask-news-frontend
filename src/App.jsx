import React, { useState } from "react";
import { Button, Card, TextField, CircularProgress } from "@mui/material"; // Import CircularProgress
import "../src/styles/front.css";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import axios from "axios";

function App() {
  const [predictionResult, setPredictionResult] = useState("");
  const [newsText, setNewsText] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const handleCheckNews = async () => {
    try {
      setIsLoading(true); // Set loading to true

      const response = await axios.post("https://flask-news-backend.onrender.com/api/predict", {
        news_text: newsText,
      });

      setPredictionResult(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  return (
    <>
      <div className="content">
        <h1>Fake News Predictor 🕵️‍♀️</h1>
        <Card style={{ width: "30rem" }} className="cardBody">
          <div className="formContainer">
            <TextareaAutosize
              minRows={5}
              style={{ maxWidth: "100rem" }}
              onChange={(e) => setNewsText(e.target.value)}
              placeholder="Enter the news here"
              value={newsText}
            />
            <Button variant="contained" onClick={handleCheckNews}>
              Check the news
            </Button>
          </div>
        </Card>

        <div className="resultContainer">
          <h1>Result</h1>
          {isLoading ? (
            <CircularProgress /> // Show loading indicator
          ) : (
            predictionResult === "reliable news" ? (
              <h2 style={{ color: "green" }}>{predictionResult} ✔️</h2>
            ) : (
              <h2 style={{ color: "cyan" }}>{predictionResult} ❌</h2>
            )
            
          )}
        </div>
      </div>
    </>
  );
}

export default App;
