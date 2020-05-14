import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

if (!!window.MSInputMethodContext && !!document.documentMode) {
  alert('Windows!');

  document.getElementById('explorer-banner').style.display = 'block';
}
