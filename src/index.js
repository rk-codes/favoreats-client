import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import LandingPage from './components/landing-page';

ReactDOM.render(
    <div>
        <App />
    </div>
, document.getElementById('root'));
registerServiceWorker();
