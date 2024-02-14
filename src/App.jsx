import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import LoginPage from './components/SignUpPages/LoginPage';
import RegisterPage from './components/SignUpPages/RegisterPage';
import SingMemberPage from './components/SingMember/SingMemberPage';

const App = () => {
  return ( 
    <main>
      <Routes>
            <Route extact path="/" Component={LoginPage}/>
            <Route path="/home" Component={Home}/>
            <Route path="/signup" Component={RegisterPage}/>
            <Route path='/member' Component={SingMemberPage}/>
      </Routes>
        </main>
   );
}
 
export default App;
