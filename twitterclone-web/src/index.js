import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {TweetsComponent, TweetDetailComponent} from './tweets'

// const rootEl = document.getElementById("root")
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootEl
// );

const e = React.createElement
const tweetsEl = document.getElementById("twitterclone")
if (tweetsEl){
  ReactDOM.render(
    e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetDetailElements = document.querySelectorAll(".twitterclone-detail")

tweetDetailElements.forEach(container=>{
  ReactDOM.render(
    e(TweetDetailComponent, container.dataset),
    container);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
