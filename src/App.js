import './App.css';
import LogIn from './Pages/Login';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './Pages/Dashboard';
import AdminDashboard from './Pages/AdminDashboard';
function App() {
  return (
    <div className="App">
      
    
      <BrowserRouter>
      
    <Routes>
        <Route exact path='/' element = {<LogIn/>}></Route>
        <Route exact path='/Home' element = {<AdminDashboard></AdminDashboard>}></Route>
        
        
    </Routes>

    </BrowserRouter>

      
    </div>
  )
}

export default App;
