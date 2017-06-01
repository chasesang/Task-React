import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
let users = [{
  id:1,
  first_name: 'Chase',
  last_name: 'Sang'
},{
  id:2,
  first_name: 'Jason',
  last_name: 'T'
},{
  id:3,
  first_name: 'Serena',
  last_name: 'L'
}

]
ReactDOM.render(<App users = {users}/>, document.getElementById('root'));
registerServiceWorker();
