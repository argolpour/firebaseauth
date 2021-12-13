import './App.css';
import Signup from './components/firebase/signUp/Signup';
import {Container} from 'react-bootstrap'
import AuthState from './components/firebase/context/AuthState';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <Router>
      
    <AuthState>
   
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={ <Signup/>}/>
        <Route path="/login" element={ <Login/>}/>
        </Routes>
      </div>
    </Container>
       </AuthState>
    
    </Router>
  
  );
}

export default App;
