
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ToDoList from './components/ToDoList';

function App() {
  return (
    /*
    <div className='schema'>
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/to-do-list" element={<ToDoList/>}/>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
    </div>
    */
   
   <>
   <ToDoList/>
   </>
   
  );
}
export default App;
