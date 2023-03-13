
import { Route,Routes } from 'react-router-dom';
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
     </Routes>

    
    
     </div>
  );
}
export default App;