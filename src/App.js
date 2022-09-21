import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signin from './Signin';
import Passwordreset from './Passwordreset';
import Dashboard from './Dashboard';
import ResetPasswordPage from './ResetPasswordPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Signin/>} />
          <Route path='/resetpassword' element={<Passwordreset/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/reset-password-page' element={< ResetPasswordPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
