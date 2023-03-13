import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {AuthActions} from "../store/AuthReducer"
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SignIn = () =>{
const history = useNavigate();
const dispatch = useDispatch();
const emailRef = useRef("");
const pswdRef = useRef("");

const submithandler = (e)=>{
e.preventDefault();

const enteredemail = emailRef.current.value;
const enteredpassword = pswdRef.current.value;
localStorage.setItem("userEmail" , enteredemail)

fetch(
"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcDNxwm_rDXN068U1-nrHh3QKnnEGtZbY",{
    
    method: "Post",
    body:JSON.stringify({
    email:enteredemail,
    password:enteredpassword,
    returnSecureToken: true,
    }),

    headers:{
      "Content-Type": "application/json",
    }
    }
).then((res)=>{
	if(res.ok){
		console.log("sign In is successfully")
		return res.json();
	}else {
		res.json().then((data)=>{
		let errorMessage = "Authentication failed";	
		if(data && data.error && data.error.message){
			errorMessage = data.error.message;
         
		}
    throw new Error(errorMessage);
		})
	}
})
.then((data) => {
  dispatch(AuthActions.login(data.idToken));
   console.log(data.idToken);
   history('/Welcome');
 })
 .catch((err) => {
   alert(err.message);
 });

}


  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                <h2 className="text-center">Sign In</h2>
                  <div className="mb-3">
                    <Form onSubmit={submithandler}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={pswdRef}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a>
                          <Link to="/signup" className="text-primary fw-bold">Sign Up</Link>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
  export default SignIn;
