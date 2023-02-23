import { useState, useEffect } from "react";
import Article from "./Article";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import { Link } from "react-router-dom"

export default function GetImages2() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}&count=10`
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      {/* <div className="container mx-auto px-5">
        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section>
            <div className="row g-2">
              <div className="col-6">
                {images.map((image) => (
                  <Article2 key={image.id} {...image} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div> */}
      <div className="col-sm-4 mb-lg-0">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {images.map((image) => (
            <Article key={image.id} {...image} />
          ))}
        </LightGallery>
      </div>
    </>
  );
}
