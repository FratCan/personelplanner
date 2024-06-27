
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';
import { Calendar } from 'antd';



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
