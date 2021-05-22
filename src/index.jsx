import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { jokes } from './jokes.js';
import { Joke } from './Joke/Joke';

const App = () => {
  return jokes.map((jokeField) => {
    return <Joke 
    key={jokeField.name}
    name={jokeField.name}
    avatar={jokeField.avatar}
    text={jokeField.text}
    likes={jokeField.likes}
    dislikes={jokeField.dislikes}
     />
  });
};

render(<App />, document.querySelector('#app'));