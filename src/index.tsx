/** @format */

import ReactDOM from 'react-dom/client';

import App from './App';

const elem: any = document.getElementById('root');
const root: any = ReactDOM.createRoot(elem ? elem : <span></span>);

root.render(<App />);
