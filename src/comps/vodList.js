import React, { useEffect, useState } from 'react';
import VodItem from './vodItem';
import axios from 'axios';

function VodList(props) {
    // A state for the array that holds the movies list
    let [vod_ar, setVodAr] = useState([]);

    useEffect(() => {
        doApi('s=bank');
    }, []);

    // Get a list of the videos
    const doApi = async (_params) => {
        console.log(`${process.env.REACT_APP_API_KEY}`);
        // let url = 'https://www.omdbapi.com/?' + _params + '&apikey=' + `${process.env.API_KEY}`;
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

export default VodList