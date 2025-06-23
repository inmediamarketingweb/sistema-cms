import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './App.css';

import Homepage from './Web/Paginas/Homepage/Homepage';
import CMSHomepage from './CMS/Paginas/CMSHomepage/CMSHomepage';

function App(){
    return(
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cms" element={<CMSHomepage />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
