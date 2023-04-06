
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/account/Login'
import Landing from './LandingPage/Landing'

function App() {
  return (
    <Router>
 <div className="App">
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='Our Story' element=''/>
    <Route path='Membership' element=''/> 
    <Route path='Write' element=''/>
    <Route path='Sign_In' element={<Login/>}/>
       
    
  </Routes>
      
      
    </div>
    </Router>
   
  );
}

export default App;
