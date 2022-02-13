import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Stars from './stars';

function VideoDetails(props) {
    // A state for the video details
    let [vod, setVod] = useState({});
    let nav = useNavigate();
    let params = useParams();

    useEffect(() => {
        doApi('i=' + params.id);
    }, [params.id,]);

    // Getting video detail from the api
    const doApi = async (_params) => {
        let url = `https://www.omdbapi.com/?${_params}&apikey=${process.env.REACT_APP_API_KEY}`;
        let resp = await axios.get(url);
        console.log(resp.data);
        setVod(resp.data);
        console.log('doApi');
    }

    // Return to the previous page
    const onBackClick = () => {
        nav(-1);
    }

    return (
        <div className='text-light container'>
            <button onClick={onBackClick} className='btn btn-success'>Back</button>
            {/* If info exists it will render the info */}
            {vod.Title ?
                <div className=' row justify-content-center align-items-center mx-auto'>
                    <div className='img_div col-lg-5 text-center my-2 float-md-start'>
                        <img src={vod.Poster} alt={vod.Title} />
                    </div>
                    <div className='col-lg-5'>
                        <h2 className='mb-4 h1'>{vod.Title}</h2>
                        <p>{vod.Plot}</p>
                        <hr />
                        <p>Genre: {vod.Genre}</p>
                        <hr />
                        <p>Year: {vod.Year}</p>
                        <hr />
                        <div className='d-flex'>
                            IMDB rating:
                            {/* Checking if rating exists */}
                            {vod.imdbRating !== 'N/A' ?
                                <React.Fragment>
                                    <Stars votesCounter={vod.imdbRating} />
                                    {vod.imdbRating + '/10   (' + vod.imdbVotes + ')'}
                                </React.Fragment>
                                : <div className='text-danger ms-1'> Not available</div>
                            }
                        </div>
                        <hr />
                    </div>
                </div> : <div className='text-center'><h2>Loading...</h2></div>
            }
        </div>
    )
}

export default VideoDetails