require('normalize.css');
require('../css/app.scss');
require('babel-core/polyfill');

import React from 'react';
import { render } from 'react-dom';
import Root from './components/RootComponent';

render(<Root />, document.getElementById('root'));
