import { Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './containers/home/Home';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Suspense fallback={<div>Loading...</div>}>
           <Route path="/" element={<Home />}/>
        </Suspense>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
