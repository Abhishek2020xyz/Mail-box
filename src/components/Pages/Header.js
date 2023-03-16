import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/AuthReducer';

const Header = (props) => {
const dispatch = useDispatch();

const show = useSelector(state => state.auth.isLogin)
const logoutHandler = () =>{
  alert("Do you want Logout")
  dispatch(authActions.logout())
};
  return (
    <div style={{backgroundColor: 'beige'}}>
      <Nav className='justify-content-center' activeKey="/home">
        
      {show && <Button variant='outline-primary' style={{margin:'20px'}}>
      <Link to='/Welcome'>Compose</Link></Button>}

      {show && <Button variant='outline-primary' style={{margin:'20px'}}>
      <Link to='/Inbox'>Inbox</Link></Button>}

      {show && <Button variant='outline-primary' style={{margin:'20px'}}>
      <Link to='sentbox'>Sent Box</Link></Button>}

       {show && <div style={{margin:'20px'}}><Link to="/" onClick={logoutHandler}>
        <Button variant="outline-danger">Logout</Button></Link>
        </div>}
      </Nav>
     
    </div>
  )
}

export default Header;