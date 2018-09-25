import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HanziRacer from './components/HanziRacer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HanziRacer />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
