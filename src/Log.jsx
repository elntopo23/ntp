import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Password() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "eltopo23") {
            navigate("/Upload");
        } else {
            setError("Incorrect password");
        }
    };

    return (
        <div className="password">
            <h2>To post enter the NTOPO administration Password</h2>
            <form onSubmit={handleSubmit}>
             <ul className="form-password">
             <li>   <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Enter password"
         /></li><br></br>
             <li> <button type="submit">Continue</button></li>
              <br></br>
             <li > {error  && <p className="error" style={{ color: "red" }}>{error}</p>}</li>
             </ul>
             
               
            </form>
           
        </div>
    );
}