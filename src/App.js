import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Cat from './Cat';
import Dog from './Dog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
      <div className="App">
        <Navbar />
      <div className="content">
      <Router>
        <Routes>
          <Route path="/catvdog/" element={<Home/>}/>
          <Route path="/catvdog/Cat" element={<Cat/>}/>
          <Route path="/catvdog/Dog" element={<Dog/>}/>
        </Routes>
        </Router>
      </div>
      </div>
  );
}

export default App;
