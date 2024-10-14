import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
    const[Gif, setGif] = useState ('');

    const response = async () => {
        const url = 'https://api.giphy.com/v1/gifs/random?api_key=2Fc2S586nUgjFBlqyL0QcVeZ3D4GBZCP&tag=&rating=g';
        const {data} = await axios.get(url);
        const image = data.data.images.downsized_large.url;
        setGif(image);
    }

    useEffect(() => {
        response();
    },[]);

    const handClick = () => {
        response()
    }

    return (
        <div className="random">
            <h3>nyoh gif mu :</h3>
            <img width={500} src={Gif} alt="gif"/>
            <button onClick={handClick}>Generate</button>
        </div>
    )
}

export default Random