import { useContext, useRef } from 'react'
import  {Form,Button ,Card} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './../../firebase/context/AuthContext';

const Login = () => {
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const submitHandler= (e)=>{
        e.preventDefault()
        try {
            login(emailRef.current.value,passwordRef.current.value)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
       


        }
    return (
        <>
          <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                <Form onSubmit={(e)=>{submitHandler(e)}}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Button className='w-100 mt-3' type='submit' >Login</Button>
                    
                    
                </Form>
            </Card.Body>
        </Card>   
         <div className="w-100 text-center mt-2">
        Need an account? <Link to='/signup'>Sign Up</Link>
     </div >
     </>
        
    )
}

export default Login
