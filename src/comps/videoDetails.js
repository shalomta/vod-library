import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";

function VideoDetails(props) {
    // A state for the video details
    let [vod, setVod] = useState({});
    // A state for the array for the rating stars classes
    let [stars_arr, setStarsArr] = useState([]);
    let nav = useNavigate();
    let params = useParams();

    useEffect(() => {
        doApi('i=' + params.id);
    }, [params.id,]);

    // Every time the video info changes calculate the stars for the rating
    useEffect(() => {
        createStars();
    }, [vod])

    // Getting video detail from the api
    const doApi = async (_params) => {
        let url = `https://www.omdbapi.com/?${_params}&apikey=${process.env.REACT_APP_API_KEY}`;
        let resp = await axios.get(url);
        console.log(resp.data);
        setVod(resp.data);
        console.log('doApi');
        createStars();
    }

    // Creating an array with classes for the rating stars
    const createStars = () => {
        let stars = document.createElement('div');
        let starsArr = [];
        let i;
        if (vod.Title) {
            let votesCounter = vod.imdbRating;
            console.log(vod.imdbRating + 1);
            for (let j = 0; j < 10; j++) {
                if (votesCounter >= 1) {

                    // insert a full star
                    starsArr = [...starsArr, 'bi bi-star-fill']
                    votesCounter--;
                }
                else if (votesCounter > 0) {
                    // insert a half star
                    starsArr = [...starsArr, 'bi bi-star-half']
                    votesCounter--;
                }
                else {
                    // insert an empty star
                    starsArr = [...starsArr, 'bi bi-star']
                    votesCounter--;
                }
            }
        }

        setStarsArr([...starsArr]);
    }

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
                                <div className='d-flex mx-2'>
                                    {stars_arr.map((item, i) => {
                                        // Creating a star (full/half/empty) according to the stars array
                                        return <i key={i} className={item}></i>
                                    })}
                                </div> :' '}
                                    { vod.imdbRating + '/10   (' + vod.imdbVotes + ')'}
                        </div>
                        <hr />
                    </div>
                </div> : <div className='text-center'><h2>Loading...</h2></div>
            }
        </div>
    )
}

export default VideoDetails