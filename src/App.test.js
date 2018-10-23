import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><App /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
