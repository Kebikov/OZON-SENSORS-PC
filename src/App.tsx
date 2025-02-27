import React from 'react';
import Main from './page/Main/Main';
import Sensor from './page/Sensor/Sensor';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './app.css';


function App() {
    return (
        <div className="wrapper">
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/sensor/:id' element={<Sensor/>} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
