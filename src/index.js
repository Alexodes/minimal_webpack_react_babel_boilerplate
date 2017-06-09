import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My minimal React webpack babel setup';

ReactDOM.render(<div>{title}</div>, document.getElementById('app'));

module.hot.accept();