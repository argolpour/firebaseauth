import { useContext, useRef } from 'react'
import  {Form,Button ,Card} from 'react-bootstrap'
import AuthContext from './../context/AuthContext';
const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {login } = useContext(AuthContext)
    const submitHandler= (e)=>{
        e.preventDefault()
          login(emailRef.current.value,passwordRef.current.value)
        }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form onSubmit={(e)=>{submitHandler(e)}}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button className='w-100 mt-3' type='submit' >Sign Up</Button>
                    
                    
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? Log In
        </div >
            
        </>
    )
}

export default Signup
