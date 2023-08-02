import "./App.css";
import React, {useState} from "react"
import Navbar from "./components/Navbar";
import News from "./components/News";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import LoadingBar from "react-top-loading-bar"

const App = ()=>{
  // const apiKey="c384ff7087e983c4ab21bdc27bdd827e";
  const apiKey="76b87eb343205e099303be1ca2e5c497";
  
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar height={3} color='#f11946' progress={progress}/>
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' country='in' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' country='in' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
