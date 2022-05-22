import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import './index.css';

import '@fontsource/comfortaa';
import '@fontsource/roboto';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-datepicker/dist/react-datepicker.css';
const getLibrary = (provider) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

ReactDOM.render(
    <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Web3ReactProvider>,
    document.getElementById('root')
);
