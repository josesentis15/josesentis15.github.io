import React from 'react';
import ReactDOM from 'react-dom';

import ComingSoon from './components/comingSoon';
// import App from './components/app';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ComingSoon />, document.getElementById('root'));

serviceWorker.unregister();
