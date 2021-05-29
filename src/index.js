import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { makeStyles } from "@material-ui/core/styles";
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from "react-router-dom";

//import Image from "./images/casino2.jpg";

const appId = "fMrW4dq9SBw3I9QhpckTvZnFfn23nc9mYmmCTR9U";
const serverUrl = "https://q0n7nvaqh2yt.moralis.io:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
