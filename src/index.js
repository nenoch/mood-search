import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var KEYWORDS = { happy: ['delight', 'delighted', 'delightful', 'happy', 'glad', 'joy', 'joyful', 'merry', 'pleasant'],
sad: ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy']};

ReactDOM.render(<App keywords={KEYWORDS}/>, document.getElementById('root'));
