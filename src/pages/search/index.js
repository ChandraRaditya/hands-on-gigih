import './index.css'
import Card from '../../components/card/index'
import SearchBar from '../../components/searchBar';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { searchQuery } from './slice';

function Search() {
    const currentSearch = useSelector((state) => state.search.value);
    const dispatch = useDispatch();
    const [images, setImage] = useState([]);
    const [text, setText] = useState('');

    const handleInputSearch = (event) => {
        setText(event.target.value)
        // console.log(event)
    }

    const getData = async (search) => {
        const dataImage = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=E5GSyW5D7GHlLqU7Erm3ZmTqYuYTWUzX&limit=12`
        ).then(response => response.json())
        setImage(dataImage.data)
    }

    const handleButton = async (a) => {
        a.preventDefault();
        const inputValue = a.target[0].value;
        // disini kita punya pilihan untuk mengambil query searchnya entah dari state atau langsung dari value element input
        // await getData(text);
        await getData(inputValue);
        dispatch(searchQuery(text))
        // console.log(currentSearch)
        setText('')
    }


    const dataImages = images.map((image) => {
        return (
            <Card
                key={image.id}
                image={image.images.fixed_width.url}
                title={image.title}
            />
        )
    })


    return (
        <div>
            <h2>hello this is current search: {currentSearch}</h2>
            <SearchBar
                handelButton={handleButton}
                handelSearchInput={handleInputSearch}
            />
            {dataImages}
        </div>
    );
}

export default Search;