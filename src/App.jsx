import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute'; // Ensure the path is correct
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import '../src/App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>


        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
