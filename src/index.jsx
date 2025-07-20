
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../style.css'


const element = React.createElement('div',{id:'test'}, 'Hello, World from react');


const root = ReactDOM.createRoot(document.getElementById('app'))




root.render(<App/>)