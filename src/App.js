
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ToDoList from './components/ToDoList';
import MainPage from './components/MainPage';
import { Calendar } from 'antd';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/to-do-list" element={<ToDoList/>}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Routes>
    </Router>
  );
}
export default App;
