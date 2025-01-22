import { Routes, Route } from 'react-router-dom'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import TarotReading from './pages/TarotReading'
import CoffeeReading from './pages/CoffeeReading'
import PalmReading from './pages/PalmReading'
import DreamReading from './pages/DreamReading'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<PrivateRoute><Services /></PrivateRoute>} />
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/tarot" element={<PrivateRoute><TarotReading /></PrivateRoute>} />
      <Route path="/coffee" element={<PrivateRoute><CoffeeReading /></PrivateRoute>} />
      <Route path="/palm" element={<PrivateRoute><PalmReading /></PrivateRoute>} />
      <Route path="/dream" element={<PrivateRoute><DreamReading /></PrivateRoute>} />
    </Routes>
  )
}

export default App
