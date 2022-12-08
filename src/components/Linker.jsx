import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Search from './Search';
import Results from './Results';

const Linker = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route exact path='/' element={<Search />} />
                <Route exact path='/search' element={<Results />} />
                <Route exact path='/news' element={<Results />} />
                <Route exact path='/images' element={<Results />} />
                <Route exact path='/videos' element={<Results />} />
            </Routes>
        </div>
    )
}

export default Linker;