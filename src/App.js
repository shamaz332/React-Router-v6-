import React from 'react';
import {Home} from "./components/home.js"
import {About} from "./components/about.js"
import {Routes,Route} from 'react-router'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello App</h1>
<Link to="/" >Home</Link>
<br/>
<Link to="/about" >About</Link>


<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
</Routes>

    </div>
  );
}

export default App;
