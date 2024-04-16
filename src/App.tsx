import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Patients } from './pages/Patients';
import { ProtectedRoute } from './pages/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Checkup } from './pages/Checkup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/patients' element={<Patients />} />
          <Route path='/checkup/:name' element={<Checkup />} />
        </Route>
        <Route path='*' element={<h1>Not Founded</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
