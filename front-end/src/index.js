import ReactDOM from 'react-dom/client';

import { HelmetProvider } from 'react-helmet-async';

import App from './App';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider context={helmetContext}>
        <App />
    </HelmetProvider>
);
