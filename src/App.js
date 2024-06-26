
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ToDoList from './components/ToDoList';
import MainPage from './components/MainPage';
import { Calendar } from 'antd';
import ContextProvide from './components/ContextProvide';
import Planla from './components/Planla';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/calendar" element={<Calendar/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage/>} />
      </Routes>
    </Router>
  );
}
export default App;
/*
     <Route path="/calendar" element={<Calendar/>} />
             <Route path="/to-do-list" element={<ToDoList/>}/>
        <Route path='/planla' element={<Planla/>}></Route>*/