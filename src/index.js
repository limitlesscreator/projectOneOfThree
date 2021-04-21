import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// console.log('hi')
// fetch(
//     'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
// )
//     .then(res => res.json())
//     .then((data) => setHeroes(data))
//
// function setHeroes({squadName, homeTown, formed, members}){
//   document.body.insertAdjacentHTML('afterbegin',`
//   <h1>${squadName}</h1>
//   <h2>${homeTown} // Formed: ${formed}</h2>
// `)
// }



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
