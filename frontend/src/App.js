import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login.page';
import Landingpage from './pages/landing.page';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Landingpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
