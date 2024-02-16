import React from 'react';
import { Loader } from './Loader';

export const MainLoader = () => {
    return (
        <div className="main-loader-wrapper">
            <Loader additionalClass="main-loader" />
        </div>
    )
}