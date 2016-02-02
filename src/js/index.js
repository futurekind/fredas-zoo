import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

[57,60,72,76,114,120,144,152,180].forEach(s => {
    let icon = document.createElement('link');
    icon.rel = 'apple-touch-icon';
    icon.setAttribute('sizes', `${s}x${s}`);
    icon.href = require(`../assets/i/apple-touch-icon-${s}x${s}.png`)
    document.head.appendChild(icon);
})

ReactDOM.render(<App />, document.getElementById('app'));
