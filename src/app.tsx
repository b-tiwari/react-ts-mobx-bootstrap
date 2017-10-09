import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Home from './components/Home';

const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap'];
ReactDOM.render(<Home techs={techStack} />, document.getElementById('app'));

