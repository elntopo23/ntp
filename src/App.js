
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./Upload";
import Home from "./Home";
import Log from "./Log";
import "./App.css"; // Import custom theme CSS

const App = () => {
 

    return (
        <Router>
       
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Upload" element={<Upload />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Log" element={<Log />} />
            </Routes>
        </Router>
    );
};

export default App;

