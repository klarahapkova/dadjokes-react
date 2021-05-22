import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
const [thumbUp, setThumbUp] = useState(0);
const [thumbDown, setThumbDown] = useState(0);

const handleThumbUp = () => {
  setThumbUp(thumbUp + 1);
};

const handleThumbDown = () => {
  setThumbDown(thumbDown + 1);
};

return (
  <div className="container">
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar" src={props.avatar}/>
          <p className="user-name">{props.name}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleThumbUp}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {thumbUp + props.likes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleThumbDown}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down"> 
          {thumbDown + props.dislikes}
        </span>
      </div>
    </div>
  </div>
);
}