
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<SignUp/>}/>
     </Routes>
     </div>
  );
}
export default App;