import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage/Home'; 
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Services" element={<Services />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
