import  { useState } from "react";
import { Button, Card, TextField } from "@mui/material";
import { Link} from "react-router-dom"; // Import useHistory
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // Initialize useHistory

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        email,
        password,
      });

      // Assuming the response contains the access token
      const accessToken = response.data.data.session.access_token;

      // Store the access token in local storage
      localStorage.setItem("accessToken", accessToken);

      console.log("Signup successful");

      // // Redirect to the "/" route after successful signup
      // history.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Signup</h1>

        <Card style={{ width: "30rem" }} className="cardBody">
          <div className="formContainer">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              style={{ width: "100%", marginTop: "1rem" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" style={{ marginTop: "1rem" }} onClick={handleSignup}>
              Signup
            </Button>
            <Link to="/login">Already have an account?</Link>
            <p></p>
          </div>
        </Card>
      </div>
    </>
  );
}
