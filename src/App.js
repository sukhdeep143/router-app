import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
        <header>
          <Nav />
        </header>
      <h1>Router app</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
