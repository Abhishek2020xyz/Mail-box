import { useRef } from "react";
import { Form , Button } from "react-bootstrap";


function  EmailForm (){
const emailinputref = useRef();
const messageinputref = useRef();
const subjectinputref = useRef();


const handlerSubmit = (e) => {
  e.preventDefault();

  const enteredemail = emailinputref.current.value;
  const enteredmessage = messageinputref.current.value;
  const entersubject = subjectinputref.current.value;
  const replacedmail = enteredemail.replace('@','').replace('.','')
   localStorage.setItem('replacedmail',replacedmail)

const emaildata = {email: enteredemail, message: enteredmessage, subject: entersubject}
 

console.log(emaildata)
fetch(
   ` https://mail-box-client-c37fc-default-rtdb.firebaseio.com/emailData/${localStorage.getItem('email')}/Sent.json`,{

   method: "POST",
   body: JSON.stringify(emaildata),
      
headers : {
  "Content-Type" : "application/json",
}

}).then((res)=>{
  if(res.ok){
      return res.json()
  }else{
      res.json().then((data)=>{

          if(data&&data.error&&data.error.message){
            console.log(data)
             let  errormessage = 'not succesful ' + data.error.message
             throw new Error(errormessage)
          }
      }).then((data)=>{


      }).catch((error)=>{
          alert(error.message)
      })
  }
})

fetch(
` https://mail-box-client-c37fc-default-rtdb.firebaseio.com/emailData/${localStorage.getItem('replacedmail')}/Recieve.json`,{

method:'POST',
body:JSON.stringify(
    emaildata
),
headers:{
    'Content-Type':'application/json'
  }
}).then((res)=>{
if(res.ok){
    return res.json()
}else{
    res.json().then((data)=>{

        if(data && data.error && data.error.message){
          console.log(data)
           let  errormessage = 'not succesful ' + data.error.message
           throw new Error(errormessage)
        }
    }).then((data)=>{

    }).catch((error)=>{
        alert(error.message)
    })
}
}) 
};

return (
    <div style={{margin:'5%'}}>
      <Form onSubmit={handlerSubmit}>
      <Form.Group controlId="recipientEmail">
        <Form.Label>To</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref = {emailinputref}
        />

     <Form.Group controlId="recipientSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          ref = {subjectinputref}

        />
      </Form.Group>


      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
           ref = {messageinputref}
        />
      </Form.Group>  
      <Button variant="primary" type="submit" style={{marginTop:'1%'}}>
        Send Email
      </Button>
    </Form>
    </div>
  );
}

export default EmailForm;