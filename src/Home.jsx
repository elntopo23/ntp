import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import Logo from "./Logo";
 import { TailSpin } from "react-loader-spinner";
 import home from "./home.png"
 import txc from "./txc.png"
 import wed from "./wed.png"

export default function Home() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true); 
    const handleRefresh = () => {
        window.location.reload();
      };
    
    useEffect(() => {
        // Fetch photos data
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/photos`)
            .then((res) => {
                setPhotos(res.data);
                setLoading(false); // Data fetched, set loading to false
            })
            .catch((err) => {
                console.error(err);
                setLoading(false); // If error occurs, set loading to false
            });
    }, []);

    const handleLike = async (id) => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/photos/like/${id}`);
        setPhotos(photos.map(photo => photo._id === id ? { ...photo, likes: photo.likes + 1 } : photo));
    };

    const handleShare = (imageUrl) => {
        navigator.clipboard.writeText(imageUrl);
        alert("Image URL copied to clipboard!");
    };

    if (loading) {
        // Return a simple preloader while data is being fetched
        return (
            <div className="preloader">
            <TailSpin
            height={80}
            width={80}
            color="orangered" // Customize color
            ariaLabel="loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            timeout={null} // Optional timeout
          />
          <p className="loading-message">NTOPO</p>
          <p className="lod">a FRVNK creation</p>
          
            </div>
        );
    }


    return (
        <div>
        <Button/>
        <Logo/>
        <ul className="home-ul">
        <li><button onClick={handleRefresh}><img src={home}alt=""/></button></li>
        <li id="home" onClick={handleRefresh}>Home</li>
        </ul>

            {photos.map((photo) => (
                <div key={photo._id} className="post-body">
                  <ul className="photo-body">  
                  <li><p>{photo.description}</p></li>
                  <li> <img src={photo.imageUrl} alt="Uploaded"/></li>
                     <ul className="photo-controls">  
                     <li><button onClick={() => handleLike(photo._id)}>Like ({photo.likes}) </button></li>
                    

                     <li><button onClick={() => handleShare(photo.imageUrl)}>Share</button></li>
                     </ul>
                     <br></br>
                  
                </ul>


         
                </div>
            ))}
            <footer>
            <li><p>n.t.o.p.o</p></li>
            <ul className="footer">
        
            <li className="deco"><img src={wed} alt=""/></li>
            <li className="deco"><img src={txc} alt=""/></li>
            <li className="deco"><img src={wed} alt=""/></li>
            <li className="deco"><img src={txc} alt=""/></li>
        
            </ul>
            
            </footer>
          
        </div>
    );
}