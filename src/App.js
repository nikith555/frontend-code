
import SignInPage from './components/Singup';
import './App.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<SignInPage/>}/>

      </Routes>
    
   
  );
}

export default App;
