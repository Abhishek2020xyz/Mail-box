import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { inboxAction } from "../store/InboxSlice";

const Inbox = () => {

const emaildata = useSelector(state=>state.in.inbox);
const dispatch = useDispatch();
const submitHandler = () =>{
    fetch(
 `https://mail-box-client-c37fc-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}/Recive.json`).then((res)=>{

     if(res.ok){
        return res.json()
     }else{
        return res.json().then((data)=>{
            if(data && data.error && data.error.message){
                let errMessage = "Authentication Failed," + data.error.message;

                throw new Error(errMessage);
            }
        })
     }
 }).then((data)=>{
    const myarr = []

    for(let i in data){
        myarr.push({
            id:i,
            email:data[i].email,
            subject:data[i].subject,
            message:data[i].message
        })
    }
    console.log(data)
    dispatch(inboxAction.setinbox(myarr))


 }).catch((err)=>{
    alert(err.message)
 })
   
}
useEffect(()=>{
    submitHandler();
},[]);


return (

    <div>

  {emaildata.map((item,index)=>(

      <div key={index}>

          <p>Email:  {item.email}</p>

          <p>Subject: {item.subject}</p>

          <p>Message: {item.message}</p>

          <hr/>

      </div>

  ))}

  </div> 




)

}




export default Inbox