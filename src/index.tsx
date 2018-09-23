import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StatefulHello from './components/StatefulHello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <StatefulHello />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
