import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VodItem from './vodItem';

function VodListyear(props) {
    // A state for the array that holds the movies list
    let [vod_ar, setVodAr] = useState([]);
    let params = useParams();

    useEffect(() => {
        doApi('s=bank&y=' + params.year);
    }, [params.year]);

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

    return (
        <div className='container'>
            {vod_ar[0] ?
                <div className='row justify-content-center'>
                    {vod_ar.map(item => {
                        return (
                            <VodItem key={item.imdbID} item={item} />
                        )
                    })}
                </div> :
                <h2 className='text-light text-center'>Loading...</h2>
            }
        </div>
    )
}

export default VodListyear