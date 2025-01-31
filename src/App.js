import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Homepage/Homepage'

function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default function AppWrapper(){
    return(
        <Router>
            <App />
        </Router>
    );
}