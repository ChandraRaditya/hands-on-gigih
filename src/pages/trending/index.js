import { useState, useEffect } from "react";
import CardGif from "../../components/cardGif/index.tsx";
import "./index.css";

function Trending() {
  const [images, setImage] = useState([]);
  const api_key = process.env.REACT_APP_GIPHY_KEY;

  useEffect(() => {
    const getData = async () => {
      const dataImage = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=12`
      ).then((response) => response.json());
      setImage(dataImage.data);
      console.log(dataImage.data);
    };
    getData();
  }, []);

  const dataImages = images?.map((image) => {
    return (
      <CardGif
        key={image.id}
        image={image.images.fixed_width.url}
        title={image.title}
      />
    );
  });

  return (
    <div className="trending-container">
      <h2>Trending Gifs</h2>
      <div className="image-container">{dataImages}</div>
    </div>
  );
}

export default Trending;
