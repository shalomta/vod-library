import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VodItem from './vodItem';

function VodListSearch(props){
    // A state for the array that holds the movies list
    let [vod_ar, setVodAr] = useState([]);
    let params = useParams();

    useEffect(() => {
        doApi('s=' + params.searchQ);
    }, [params.searchQ]);

    // Get a list of the videos
    const doApi = async (_params) => {
        let url = `https://www.omdbapi.com/?${_params}&apikey=${process.env.REACT_APP_API_KEY}`;
        let data = await axios.get(url);
        console.log(data);
        if (data.data.Search) {
            console.log(data.data.Search);
            setVodAr(data.data.Search);
        }
    }

    return(
        <div className='container'>
            <div className='row justify-content-center'>
                {vod_ar.map(item => {
                    return (
                        <VodItem key={item.imdbID} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default VodListSearch