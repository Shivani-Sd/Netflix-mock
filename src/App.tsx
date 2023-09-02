import { Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./containers/home/Home";
// import Home from "./containers/home/Home";
// import Testing from "./containers/testing/Testing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/testing" element={<Testing />} /> */}
          </Suspense>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
