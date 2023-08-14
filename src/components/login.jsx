// import {useState } from React;
import { Button, Card, TextField } from "@mui/material";
import {Link} from "react-router-dom"


export default function Login() {


    return (
    <>
      <div  style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
        <h1>login</h1>

        <Card style={{ width: "30rem" }} className="cardBody">
          <div className="formContainer">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              style={{ width: "100%", marginTop: "1rem" }}
            />
            <Button variant="contained" style={{ marginTop: "1rem" }}>
              Login
            </Button>
            <Link to="/">Dont have a account click here ?</Link>
          </div>
        </Card>
      </div>
    </>
  );
}
