import { useState, useEffect } from 'react';
import Card from '../../components/card/index';
import './index.css'

function Trending() {
    const [images, setImage] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const dataImage = await fetch(
                `http://api.giphy.com/v1/gifs/trending?api_key=E5GSyW5D7GHlLqU7Erm3ZmTqYuYTWUzX&limit=12`
            ).then(response => response.json())
            setImage(dataImage.data)
            console.log(dataImage.data)
        }
        getData()
    }, [])

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
        <div className='trending-container'>
            <h2>Trending Gif</h2>
            {dataImages}
        </div>
    )
}

export default Trending;