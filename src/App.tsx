import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './components/defaultLayout/DefaultLayout'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'


function App() {


  return (
    <>
    <Router>
    <Routes>
    <Route path="/*" element={<DefaultLayout />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
