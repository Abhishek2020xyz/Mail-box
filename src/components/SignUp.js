import { useRef } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

 const SignUp = () => {
	const emailRef = useRef("");
	const psrdRef = useRef("");
	const cnfpsrdRef = useRef("");

	const submithandler = (e)=>{
		e.preventDefault();

	const enteredemail = emailRef.current.value;
	const enteredpassword = psrdRef.current.value;
	const enterdconformPassword = cnfpsrdRef.current.value;

	if(enteredpassword !== enterdconformPassword){
		alert('please enterd same password')
		
		return;
	}
 fetch(
	"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcDNxwm_rDXN068U1-nrHh3QKnnEGtZbY",{
	
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
		console.log("sign up is successfully")
		return res.json();
	}else {
		res.json().then((data)=>{
		let errorMessage = "Authentication failed";	
		if(data && data.error && data.error.message){
			errorMessage = data.error.message;
		}
		alert(errorMessage);
		})
	}
})
}




  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="text-center">Sign Up</h2>
                  
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
                        <Form.Control type="password" placeholder="Password" ref={psrdRef}/>
                      </Form.Group>

					  <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>conform Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={cnfpsrdRef}/>
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
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
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
  )
 }
 export default SignUp;