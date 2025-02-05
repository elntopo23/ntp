import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Upload() {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [uploading, setUploading] = useState(false);
    
    const handleUpload = async () => {
        if (!image) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("image", image);
        formData.append("description", description);

        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/photos/upload`, formData);
        setUploading(false);
        setImage(null);
        setDescription("");
        window.location.href="/Home"
    };

    return (
        <div className="upload">
        <h1>Post Photo with Caption</h1>
           <p>please don't close this page before the upload is complete</p>
         <ul>
         <li>  <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*"/>
        </li>
         <li> <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} row="auto" column="auto" /></li>
         <li> <button onClick={handleUpload} disabled={uploading}>
         {uploading ? "Posting..." : "Post"}
     </button></li>
         </ul>
          
           
        </div>
    );
}
