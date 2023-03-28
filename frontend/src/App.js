import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthGuard from './guards/auth.guard';
import Login from './pages/login.page';
import Landingpage from './pages/landing.page';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<AuthGuard><Landingpage/></AuthGuard>}/>
      </Routes>
    </div>
  );
}

export default App;
