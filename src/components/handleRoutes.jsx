import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  App  from "../App";
import Login from "../components/login";
import Signup from "../components/signup";


export default function handleRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/" element={<Signup />} /> */}
                </Routes>
            </Router>
        </>
    );
}