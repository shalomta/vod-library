import React from 'react';
import { useNavigate } from 'react-router-dom';

function VodItem(props) {
    let item = props.item;
    let nav = useNavigate();

    // Navigate to a page with the video details
    const onVodClick = () => {
        nav('/video/' + item.imdbID);
    }

    return (
        <div className='col-lg-3 col-md-4 col-9 text-center vod_item m-2' onClick={onVodClick}>
            <div className='vod_poster p-1 m-2 d-flex align-items-center justify-content-center bg-secondary' style={{ backgroundImage: `url(${item.Poster})` }}>
               {item.Poster !== 'N/A' ? <img src={item.Poster} className='w-100 d-md-none'></img> : ''}
                {item.Poster === 'N/A' ? <div className='text-light'>Image not avilable</div> : ''}
            </div>
            <div className='text-light'>{item.Title}</div>
        </div>
    )
}

export default VodItem