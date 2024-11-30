import React from "react";

import '../css/loading.css';
import loadingSymbol from '../img/loading_symbol.svg';

const Loading = () => {

    return (
        <div className="loading">
            <img id="loading-symbol" src={loadingSymbol} aria-label="Loading symbol" alt="Loading..."/>
        </div>  
    );
}

export default Loading;