
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ToDoList from './components/ToDoList';
import MainPage from './components/MainPage';


function App() {
  return (

    <div className='schema'>
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/to-do-list" element={<ToDoList/>}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage/>}/>
      </Routes>
    </Router>
    </div>
    
/*
   <>
    <Route path="/main" element={<MainPage/>} />
   <ToDoList/>
   </>
*/  


  );
}
export default App;

/*

        */