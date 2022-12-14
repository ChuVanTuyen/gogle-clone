import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Audio type="Puff" color="00BFFF" height={550} width={80}></Audio>
        </div>
    )
}

export default Loading;