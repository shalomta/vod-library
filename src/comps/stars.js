import React, { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function Stars(props) {
    // A state for the array for the rating stars classes
    let [stars_arr, setStarsArr] = useState([]);

    useEffect(() => {
        createStars();
    }, [])

    // Creating an array with classes for the rating stars
    const createStars = () => {
        let starsArr = [];
        let i;
            let votesCounter = props.votesCounter;
            // console.log(vod.imdbRating + 1);
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

        setStarsArr([...starsArr]);
    }

    return (
        <div className='d-flex mx-2'>
            {stars_arr.map((item, i) => {
                // Creating a star (full/half/empty) according to the stars array
                return <i key={i} className={item}></i>
            })}
        </div>
    )
}

export default Stars