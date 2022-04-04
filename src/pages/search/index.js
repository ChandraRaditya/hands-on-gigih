import './index.css'
import Card from '../../components/card/index'
import SearchBar from '../../components/searchBar';
import React, { useState } from 'react';

function Search() {
    const [images, setImage] = useState([]);
    const [text, setText] = useState('');

    const handleInputSearch = (event) => {
        setText(event.target.value)
    }

    const getData = async (search) => {
        const dataImage = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=E5GSyW5D7GHlLqU7Erm3ZmTqYuYTWUzX&limit=12`
        ).then(response => response.json())
        setImage(dataImage.data)
    }

    const handleButton = async (a) => {
        a.preventDefault();
        const inputValue = a.target.value;
        // disini kita punya pilihan untuk mengambil query searchnya entah dari state atau langsung dari value element input
        // console.log(text)
        // await getData(text);
        await getData(inputValue);
        setText('')
    }


    const dataImages = images.map((image) => {
        return (
            <Card
                image={image.images.fixed_width.url}
                title={image.title}
            />
        )
    })


    return (
        <div>
            <SearchBar
                handelButton={handleButton}
                handelSearchInput={handleInputSearch}
            />
            {dataImages}
        </div>
    );
}

export default Search;