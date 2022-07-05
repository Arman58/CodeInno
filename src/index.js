import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MapProvider} from "./context/MapContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MapProvider>
        <App/>
    </MapProvider>
);
