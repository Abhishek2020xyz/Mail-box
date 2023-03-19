// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { inboxAction } from "../store/InboxSlice";

// const Inbox = () => {

// const emaildata = useSelector(state=>state.in.inbox);
// const dispatch = useDispatch();
// const submitHandler = () =>{
//     fetch(
//  `https://mail-box-client-c37fc-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}/Recieve.json`
//  ).then((res)=>{

//      if(res.ok){
//         return res.json()
//      }else{
//         return res.json().then((data)=>{
//             if(data && data.error && data.error.message){
//                 let errMessage = "Authentication Failed," + data.error.message;

//                 throw new Error(errMessage);
//             }
//         })
//      }
//  }).then((data)=>{
//     const myarr = []

//     for(let i in data){
//         myarr.push({
//             id:i,
//             email:data[i].email,
//             subject:data[i].subject,
//             message:data[i].message
//         })
//     }
//     //console.log(data)
//     console.log(myarr)
//     dispatch(inboxAction.setinbox(myarr))


//  }).catch((err)=>{
//     alert(err.message)
//  })
   
// }
// useEffect(()=>{
//     submitHandler();
// },[]);


// return (

//     <div>

//   {emaildata.map((item,index)=>(

//       <div key={index}>

//           <p>Email:  {item.email}</p>

//           <p>Subject: {item.subject}</p>

//           <p>Message: {item.message}</p>

//           <hr/>

//       </div>

//   ))}

//   </div> 




// )

// }




// export default Inbox


import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
import { inboxAction } from "../store/InboxSlice";
import { useSelector } from 'react-redux'
import { sentboxAction } from '../store/SentSlice';
function Inbox() {
    const emaildata = useSelector(state=>state.sent.sentbox);
    console.log(emaildata)
    const dispatch = useDispatch();
    const getSaveData = () =>{
    fetch(` https://mail-box-client-c37fc-default-rtdb.firebaseio.com/emailData/${localStorage.getItem('replacedmail')}/Recieve.json`)
    .then(
        (res)=>{
        
    if(res.ok){
            return res.json()
        }else{
            return res.json().then((data)=>{
                if(data && data.error && data.error.message){
                    let errMessage = "Authentication Failed, " + data.error.message;
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
       // console.log(myarr)
       dispatch(sentboxAction.setsenbox(myarr))


    }).catch((err)=>{
        alert(err.message)
    })
}
useEffect(()=>{
    console.log("hiii guys")
getSaveData();
},[])

  const deleteHandler = (id) => {
    fetch(
`https://mail-box-client-d7cd4-default-rtdb.firebaseio.com/emailData/${localStorage.getItem("email")}/Sent/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        getSaveData();
        console.log("Expense successfuly deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };








  return (

      <div>
   {/* {emaildata.map((item,index)=>(
        <div key={index}>
            <p>Email:  {item.email}</p>
            <p>Subject: {item.subject}</p>
            <p>Message: {item.message}</p>
            <hr/>
        </div>
    ))} */}


      <div>
       {emaildata.map((item,id)=>(
        <div key={id} style={{backgroundColor:'whitesmoke' ,margin:'3%'}}>
            <p>
            From:  {item.email}{'   '}
            subject:  {item.subject}{'   '}
            message:  {item.message}{'    '}
            <Button variant="danger" style={{float:'right'}} onClick={()=> deleteHandler(item.id)}>Delete</Button>
            </p>
            <hr/>

        </div>
    ))}
    </div> 


    </div>

  )
}

export default Inbox;
