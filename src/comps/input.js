import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function Input(props) {
    let searchRef = useRef();
    let nav = useNavigate();

    const onSearchClick = async() => {
        toast("Default Notification !");
        nav('/search/' + searchRef.current.value);
    }

    return (
        <div className='container'>
            {/* <ToastContainer position="top-right" autoClose={5000} /> */}
            <div className='row p-2'>
                <div className='col-md-6 d-flex mx-auto mb-4'>
                    <input ref={searchRef} className='form-control' type='text' placeholder='search...' />
                    <button className='btn btn-info ms-1' onClick={onSearchClick}>Search</button>
                </div>
                <div className='text-center'>
                    <Link className='btn btn-info mx-1' to='/year/1989'>1989</Link>
                    <Link className='btn btn-info mx-1' to='/year/1995'>1995</Link>
                    <Link className='btn btn-info mx-1' to='/year/2000'>2000</Link>
                    <Link className='btn btn-info mx-1' to='/year/2020'>2020</Link>
                    <Link className='btn btn-info mx-1' to='/year/2021'>2021</Link>
                </div>
            </div>
        </div>
    )
}

export default Input