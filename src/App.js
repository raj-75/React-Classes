
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  return (
   <>
  
<Navbar title="TextUtil" aboutText = {30}/>
<Alert alert={alert}/>
<Router>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm  showAlert={showAlert} />}/>
    </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;
