import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Profile from './components/authentication/profile';
import Questionnaire from './components/quizcpp';



function App() {
  const isUserLoggedIn = !!localStorage.getItem('token')
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/quiz' element={<Quiz></Quiz>}></Route>
        <Route path='/result' element={<Result></Result>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {isUserLoggedIn && <Route path='/profile' element={<Profile></Profile>}></Route>}
        {isUserLoggedIn && <Route path='/quizcpp' element={<Questionnaire></Questionnaire>}></Route>}
      </Routes>
    </div>
  );
}

export default App;
