import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Input from './input';

function Layout(props) {
    let nav = useNavigate();
    return (
        <div>
            <header style={{backgroundImage:`url(/images/strip.jpg)`}}>
                <h1 className='text-center text-danger mb-4 p-3' onClick={() => {nav('/')}}>Vod Library</h1>
                <Input />
            </header>
            <main className='bg-dark py-5'>
                <Outlet />
            </main>
            <footer className='bg-secondary d-flex align-items-center justify-content-center'>
                <div>Shalom Taizi 2022</div>
            </footer>
        </div>
    )
}

export default Layout