import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const API_KEY = "j4BrvbyBrCZ5aPTvHJwAP6avHQf0dHLX";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif,setgif] = useState('');
    const [loading,setLoading] = useState(false);

    

    async function fetchData(tag){
        setLoading(true);
        const {data} = await axios.get(tag ? `${url}&tag=$tag` : url);
        const imageSource = data.data.images.downsized_large.url;
        setgif(imageSource);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData('car');
    },[])

    return {gif,loading,fetchData};
}

export default useGif
