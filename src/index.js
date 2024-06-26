import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import DeviceStore from "./store/DeviceStore";
import "./i18n";

export const Context = createContext(null)


ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>
);