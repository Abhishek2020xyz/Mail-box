import EmailForm from "./EmailForm";

function Welcome() {
  return (
   <div >
     <div style={{textAlign:'center'}}>
      <h4>Welcome to mail box client</h4>
    </div>
    <hr/>
    <EmailForm/>
   </div>

  )
}

export default Welcome