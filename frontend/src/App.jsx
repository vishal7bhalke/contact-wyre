import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Contact from './Contact'
import AdminPanel from './AdminPanel'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Contact/>}></Route>
      <Route path='/admin' element={<AdminPanel/>}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
