import App from "./components/App";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {createRoot}  from 'react-dom/client';
import './index.css'

const root = createRoot(document.getElementById("root"))
root.render
(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
