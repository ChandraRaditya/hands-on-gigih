import "./index.css";
import CardGif from "../../components/cardGif";
import SearchBar from "../../components/searchBar";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchQuery } from "./slice";
// import { configureStore } from '../../store'

function Search() {
  const currentSearch = useSelector((state: any) => state.search.value);
  const dispatch = useDispatch();
  const [images, setImage] = useState([]);
  const [text, setText] = useState("");
  const api_key = process.env.REACT_APP_GIPHY_KEY;

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const getData = async (search: string) => {
    const dataImage = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=12`
    ).then((response) => response.json());
    setImage(dataImage.data);
  };

  const handleButton = async (event: any) => {
    console.log(event);
    event.preventDefault();
    const inputValue = event.target[0].value;
    await getData(inputValue);
    dispatch(searchQuery(text));
    setText("");
  };

  const dataImages = images?.map((image: any) => {
    return (
      <CardGif
        key={image.id}
        image={image.images.fixed_width.url}
        title={image.title}
      />
    );
  });

  return (
    <div>
      <h2>hello this is current search: {currentSearch}</h2>
      <SearchBar
        handelButton={handleButton}
        handelSearchInput={handleInputSearch}
      />
      <div className="image-container">{dataImages}</div>
    </div>
  );
}

export default Search;
