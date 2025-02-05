
import "./App.css";
import { Link } from "react-router-dom";

export default function Button() {
 
  return(
          <div className="Up-btn-body">
         
          <Link to="/Log" className="Up-btn" style={{textDecoration:"none"}}>+</Link>
          </div>

  )
}