import './App.css';
import Signup from './components/firebase/signUp/Signup';
import {Container} from 'react-bootstrap'
import AuthState from './components/firebase/context/AuthState';

function App() {
  return (
    <AuthState>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
      <Signup/>
      </div>
    </Container>
    </AuthState>
  
  );
}

export default App;
