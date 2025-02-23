import React from 'react';
import Main from './component/Main/Main';
import Sensor from './component/Sensor/Sensor';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';


function App() {
    return (
        <div className="App">
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
