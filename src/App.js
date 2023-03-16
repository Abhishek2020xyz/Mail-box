
import { Route,Routes } from 'react-router-dom';
import Header from './components/Pages/Header';
import Inbox from './components/Pages/Inbox';
import Sentbox from './components/Pages/Sentbox';
import SignUp from './components/Pages/SignUp';
import SignIn from "./components/Pages/SignIn"
import Welcome from './components/Pages/Welcome';

function App() {
  return (
    <div className="App">
     <Routes>

      <Route path ='/' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path="/Welcome" element={<Welcome/>} />
      <Route path="/Inbox" element={<Inbox/>}></Route>
      <Route path='/SentBox' element={<Sentbox/>}/>
     </Routes>

    
    
     </div>
  );
}
export default App;